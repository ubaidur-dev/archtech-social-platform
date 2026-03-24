import React, { useState } from 'react';
import './styles/ui-kit.css';

const Post = ({ user, title, time, content, img, dp }) => (
  <div className="post-card fade-in">
    <div style={{ display: 'flex', gap: '14px', marginBottom: '18px', alignItems: 'center' }}>
      <img src={dp} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} alt="dp" />
      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '15.5px', fontWeight: '600', color: 'var(--text-main)' }}>{user}</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '12.5px' }}>{title} • {time} ago</p>
      </div>
    </div>
    <p style={{ color: '#d4d4d8', fontSize: '14.5px', marginBottom: '18px', lineHeight: '1.6' }}>{content}</p>
    {img && <img src={img} style={{ width: '100%', borderRadius: '8px', marginBottom: '18px', border: '1px solid var(--border)' }} alt="post" />}
    <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
      <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '13px' }}>💜 Appreciate</button>
      <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '13px' }}>💬 Thoughts</button>
    </div>
  </div>
);

function App() {
  const [tab, setTab] = useState("feed");
  const [text, setText] = useState("");

  const backendPosts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    user: ["Zain Ahmed", "Ali Raza", "Sarah Khan", "Mustafa Sheikh"][i % 4],
    title: ["Database Engineer", "DevOps Specialist", "Security Lead", "API Architect"][i % 4],
    time: `${i + 1}h`,
    dp: `https://i.pravatar.cc/150?u=techuser${i + 50}`,
    content: `Backend Update #${i + 1}: Optimized the PostgreSQL indexing strategy for the user activity table. Seeing a 30% improvement in query response times across the cluster. #BackendEngineering #Scalability`,
    img: i % 5 === 0 ? `https://picsum.photos/seed/server${i}/1200/600` : null
  }));

  const activities = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    text: `${["Zain Ahmed", "Sarah Khan", "Osama Rashid", "Fatima Khan"][i % 4]} ${["endorsed you for 'Rust'", "shared your post", "viewed your profile", "sent a connection request"][i % 4]}`,
    time: `${i + 1}m ago`,
    dp: `https://i.pravatar.cc/150?u=active${i + 80}`
  }));

  const messages = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    sender: ["Hamza", "Sarah", "Osama", "Fatima"][i % 4],
    preview: `Message #${i + 1}: Hey Hamna, let's discuss PR #${200 + i}.`,
    dp: `https://i.pravatar.cc/150?u=msg${i + 20}`
  }));

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <h2 className="logo">ARCHTECH.</h2>
        <nav style={{ flex: 1 }}>
          <button className={`nav-item ${tab === "feed" ? "active" : ""}`} onClick={() => setTab("feed")}>🏠 <span className="nav-text">Home Feed</span></button>
          <button className={`nav-item ${tab === "activity" ? "active" : ""}`} onClick={() => setTab("activity")}>🔔 <span className="nav-text">Activity Feed</span></button>
          <button className={`nav-item ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>✉️ <span className="nav-text">Direct Messages</span></button>
          <button className={`nav-item ${tab === "profile" ? "active" : ""}`} onClick={() => setTab("profile")}>👤 <span className="nav-text">Kinza Arshad</span></button>
        </nav>
        <div style={{ color: 'var(--text-muted)', fontSize: '11px', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
          Kinza Arshad // Software Developer
        </div>
      </aside>

      <main className="content-area">
        <div className="page-header">
          <h1 className="page-title">{tab === "feed" ? "Home Feed" : tab === "activity" ? "Activity" : tab === "messages" ? "Messages" : "My Profile"}</h1>
        </div>

        {tab === "feed" && (
          <div>
            <div className="create-post">
              <textarea placeholder="Share your latest backend system update..." value={text} onChange={(e) => setText(e.target.value)} />
              <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                <button className="btn-primary" onClick={() => setText("")}>Post Update</button>
              </div>
            </div>
            {backendPosts.map(p => <Post key={p.id} {...p} />)}
          </div>
        )}

        {tab === "activity" && (
          <div>
            {activities.map(a => (
              <div key={a.id} className="post-card fade-in" style={{ padding: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src={a.dp} style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
                <p style={{ fontSize: '14px', flex: 1, color: 'var(--text-main)' }}>{a.text}</p>
                <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{a.time}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "messages" && (
          <div className="post-card" style={{ padding: 0 }}>
            {messages.map(m => (
              <div key={m.id} style={{ padding: '16px', borderBottom: '1px solid var(--border)', display: 'flex', gap: '14px', cursor: 'pointer' }}>
                <img src={m.dp} style={{ width: '42px', height: '42px', borderRadius: '50%' }} alt="msg" />
                <div><h4 style={{ fontSize: '14px' }}>{m.sender}</h4><p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{m.preview}</p></div>
              </div>
            ))}
          </div>
        )}

        {tab === "profile" && (
          <div className="fade-in">
            <div className="profile-banner">
              {/* Profile blank user icon applied here */}
              <div className="avatar-large-blank">👤</div>
            </div>
            <div style={{ padding: '0 24px' }}>
              <h1 style={{ fontSize: '28px', fontWeight: '800' }}>Kinza Arshad</h1>
              <p style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '16px' }}>Backend Developer & Architect // ArchTech.</p>
              <p style={{ color: 'var(--text-muted)', marginTop: '14px', fontSize: '14.5px', maxWidth: '650px', lineHeight: '1.6' }}>Backend System Architect at ArchTech. I specialize in building robust, scalable server-side applications, optimizing databases, and managing cloud infrastructure.</p>
              <div style={{ display: 'flex', gap: '24px', margin: '24px 0', fontSize: '13px' }}>
                <div><strong>9.1k</strong> Followers</div>
                <div><strong>450+</strong> Contributions</div>
              </div>
              <h4 style={{ marginBottom: '12px', fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Technical Expertise</h4>
              {["Node.js Architect", "AWS Cloud", "PostgreSQL", "System Design"].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        )}
      </main>

      <section className="right-panel sidebar">
        <div className="post-card" style={{ padding: '20px' }}>
          <h4 style={{ fontSize: '13px', marginBottom: '16px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Trending Engineering</h4>
          {["System Architecture", "ViteJS", "CloudScale", "PostgreSQL", "TailwindCSS"].map(tag => (
            <p key={tag} className="tag">#{tag}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;