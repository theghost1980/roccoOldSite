import React from "react";
import styles from "./css_files/contact.module.css";
import downIcon from "./media-images/icon-download.png";
import faceIcon from "./media-images/icons8-facebook-100 (1).png";
import linkedinIcon from "./media-images/icons8-linkedin-2-100 (1).png";
import acaEduIcon from "./media-images/academia-edu.png";
import dossierFile from "./media-images/DOSSIER-Rocco-Mangieri.pdf";
import cvFile from "./media-images/CV-English-Rocco-Mangieri.pdf";
import Form from "./Form";

export default function Contact() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.imageContainer}></div>
      <div className={styles.innerContainer}>
        <div className={styles.formContainer}>
          <p className={styles.readingText}>
            If you would like to contact me, feel free to do so using the form
            bellow, I will replay you back as soon as possible.
          </p>
          {/* <form className={styles.form}>
                        <div className={styles.divRow}>
                            <div className={styles.left}>
                                <label className={styles.text}>Name:</label>
                            </div>
                            <div className={styles.right}>
                                <input required type={"text"} className={styles.input} onChange={this.handleChangeText} value={this.state.name} />
                            </div>
                        </div>
                        <div className={styles.divRow}>
                            <div className={styles.left}>
                                <label className={styles.text}>Email:</label>
                            </div>
                            <div className={styles.right}>
                                <input required type={"email"} className={styles.input} onChange={this.handleChangeEmail} value={this.state.email} />
                            </div>
                        </div>
                        <div className={styles.divRow}>
                            <div className={styles.left}>
                                <label className={styles.text}>Phone(Optional):</label>
                            </div>
                            <div className={styles.right}>
                                <input type={"phone"} className={styles.input} onChange={this.handleChangePhone} value={this.state.phone} />
                            </div>
                        </div>
                        <div className={styles.divRow}>
                            <div className={styles.left}>
                                <label className={styles.text}>Comments:</label>
                            </div>
                            <div className={styles.right}>
                                <textarea required className={styles.input} onChange={this.handleChange} value={this.state.feedback} />
                            </div>
                        </div>
                        <div className={styles.btnsDiv}>
                            <button className={styles.btnSubmit} type="submit">Submit</button>
                            <button className={styles.btnCancel} type="button" onClick={this.resetForm}>Cancel</button>
                        </div>
                    </form> */}
          <Form />
          <div className={styles.contactInfoMedia}>
            <div className={styles.downloadsContainer}>
              <div className={styles.divRowDownloads}>
                <p className={styles.text}>
                  Feel free to download my Curriculum Vitae
                </p>
                <a href={cvFile} target="_blank" rel="noopener noreferrer">
                  <img
                    src={downIcon}
                    className={styles.iconD}
                    alt={"Icon Download 1"}
                    title={"Click to download my CV"}
                  />
                </a>
              </div>
              <div className={styles.divRowDownloads}>
                <p className={styles.text}>Also you may download my Dossier</p>
                <a href={dossierFile} target="_blank" rel="noopener noreferrer">
                  <img
                    src={downIcon}
                    className={styles.iconD}
                    alt={"Icon Download 2"}
                    title={"Click to download my Dossier"}
                  />
                </a>
              </div>
            </div>
            <div className={styles.socialMediaCont}>
              <a
                href="https://www.facebook.com/rocco.mangieri.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={faceIcon}
                  className={styles.mediaIcon}
                  alt={"Facebook Logo"}
                  title={"Visit my facebook profile"}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rocco-mangieri-2b625a184/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  className={styles.mediaIcon}
                  alt={"Linkedin Logo"}
                  title={"Visit my Linkedin profile"}
                />
              </a>
              <a
                href="https://ula.academia.edu/ROCCOMANGIERI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={acaEduIcon}
                  className={styles.mediaIcon2}
                  alt={"Academia.edu Logo"}
                  title={"Visit my Academia.edu profile"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
