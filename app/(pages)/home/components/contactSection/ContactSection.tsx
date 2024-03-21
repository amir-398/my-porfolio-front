import ContactComponent from "@/app/components/ui/contactComponent/ContactComponent";
import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import style from "./contactSection.module.css";
export default function ContactSection() {
  return (
    <PageContainer>
      <div className={style.contactSectionContainer}>
        <h3>Contact</h3>
        <h2>Une question ? Un projet ?</h2>
        <ContactComponent />
      </div>
    </PageContainer>
  );
}
