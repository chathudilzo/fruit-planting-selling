import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <section style={styles.headerSection}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.subheading}>
          Our journey in planting and selling fresh, quality fruits and drinks.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.text}>
          We started as a small, family-owned business with a mission to provide
          fresh and healthy fruits to our community. Over the years, we have
          grown into a trusted brand, known for our commitment to quality and
          sustainability. We believe in connecting people with nature and offer
          a diverse range of fruits and fresh drinks.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to promote health and wellness through our fresh,
          high-quality produce. We are dedicated to sustainable farming
          practices and committed to making nutritious fruits accessible to all.
        </p>
      </section>

      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Meet Our Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamMember}>
            <img
              src="https://showcase.empower.net/wp-content/uploads/2019/08/team-member-01.jpg"
              alt="Team Member"
              style={styles.teamImage}
            />
            <h3 style={styles.teamName}>John Doe</h3>
            <p style={styles.teamRole}>Founder & CEO</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://showcase.empower.net/wp-content/uploads/2019/08/team-member-01.jpg"
              alt="Team Member"
              style={styles.teamImage}
            />
            <h3 style={styles.teamName}>John Doe</h3>
            <p style={styles.teamRole}>Founder & CEO</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://showcase.empower.net/wp-content/uploads/2019/08/team-member-01.jpg"
              alt="Team Member"
              style={styles.teamImage}
            />
            <h3 style={styles.teamName}>John Doe</h3>
            <p style={styles.teamRole}>Founder & CEO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "40px",
    backgroundColor: "#f7f7f7",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#28a745",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "10px",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#28a745",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#666",
  },
  teamSection: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fafafa",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  teamGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  teamMember: {
    width: "150px",
    textAlign: "center",
    padding: "10px",
  },
  teamImage: {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    marginBottom: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  teamName: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#333",
  },
  teamRole: {
    fontSize: "0.9rem",
    color: "#777",
  },
};

export default AboutUs;
