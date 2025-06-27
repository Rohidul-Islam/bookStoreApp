import Subscription from '../model/subscription.model.js';
import nodemailer from 'nodemailer';

export const subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  try {
    // Save to DB
    const sub = new Subscription({ email });
    await sub.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Subscription Confirmed',
      text: 'Thank you for subscribing to Granthalaya updates!'
    });

    res.json({ success: true, message: 'Subscribed successfully!' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }
    res.status(500).json({ error: 'Failed to subscribe' });
  }
}; 