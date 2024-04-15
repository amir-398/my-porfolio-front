import Btn from "@/app/components/ui/btn/Btn";
import { useState } from "react";
import PasswordComponent from "./components/password/PasswordComponent";
import PersonalInfoComponent from "./components/personalInfo/PersonalInfoComponent";
import style from "./dashboardComponent.module.css";
export default function DashboardComponent() {
  const [whichComponent, setWhichComponent] = useState(1);

  const btnArray = [
    { id: 1, name: "Informations personnelles" },
    { id: 2, name: "Mot de passe", account: "email" },
  ];
  return (
    <div className={style.myAccountContainer}>
      <div className={style.main}>
        <div className={style.header}>
          <h1>
            Mon <span>compte</span>
          </h1>
        </div>
        <div className={style.btnsContainer}>
          {btnArray.map((btn, index) => (
            <Btn
              key={index}
              title={btn.name}
              onClick={() => setWhichComponent(index == 0 ? 1 : 2)}
            />
          ))}
        </div>
        {whichComponent == 1 && <PersonalInfoComponent />}
        {whichComponent == 2 && <PasswordComponent />}
      </div>
    </div>
  );
}
