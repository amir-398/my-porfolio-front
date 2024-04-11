import ContactComponent from "@/app/components/ui/contactComponent/ContactComponent";
import style from "./contactSection.module.css";
export default function ContactSection() {
  return (
    <div className={style.contactSectionContainer}>
      <ContactComponent />
    </div>
  );
}
