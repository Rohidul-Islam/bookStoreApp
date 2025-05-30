import React from 'react'

function Contact() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <form style={{ 
        background: 'var(--bg-form, #fff)', 
        padding: '2rem', 
        borderRadius: '10px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
        width: '100%', 
        maxWidth: '500px',
        color: 'var(--text-primary, #333)'
      }}>
        <h2 style={{ 
          fontWeight: 700, 
          marginBottom: '1.5rem', 
          fontSize: '2rem',
          color: 'var(--text-primary, #333)'
        }}>Contact Us</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: 500,
            color: 'var(--text-primary, #333)'
          }}>Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '6px', 
              border: '1px solid var(--border-color, #eee)',
              fontSize: '1rem',
              backgroundColor: 'var(--input-bg, #fff)',
              color: 'var(--text-primary, #333)'
            }} 
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: 500,
            color: 'var(--text-primary, #333)'
          }}>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email address" 
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '6px', 
              border: '1px solid var(--border-color, #eee)',
              fontSize: '1rem',
              backgroundColor: 'var(--input-bg, #fff)',
              color: 'var(--text-primary, #333)'
            }} 
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="message" style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: 500,
            color: 'var(--text-primary, #333)'
          }}>Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Type your message" 
            rows={5} 
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '6px', 
              border: '1px solid var(--border-color, #eee)',
              fontSize: '1rem',
              resize: 'vertical',
              backgroundColor: 'var(--input-bg, #fff)',
              color: 'var(--text-primary, #333)'
            }} 
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            background: '#2563eb', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '6px', 
            padding: '0.75rem 2rem', 
            fontWeight: 600, 
            fontSize: '1rem', 
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact;
