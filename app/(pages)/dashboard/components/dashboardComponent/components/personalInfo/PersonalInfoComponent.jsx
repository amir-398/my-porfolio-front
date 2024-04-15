import Btn from "@/app/components/ui/btn/Btn";
import InputComponent from "@/app/components/ui/inputComponent/InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CiWarning } from "react-icons/ci";
import { FaPen } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import style from "./personalInfoComponent.module.css";
const identitySchema = yup.object({
  firstname: yup.string().required("Champ obligatoire !"),
  lastname: yup.string().required("Champ obligatoire !"),
});
const infoSchema = yup.object({
  birth_date: yup.string(),
  // Ajoutez d'autres champs ici si nécessaire
});

export default function PersonalInfoComponent() {
  const dispatch = useDispatch();
  // Premier formulaire : Identité
  const {
    register: registerIdentity,
    handleSubmit: handleIdentitySubmit,
    setValue: setIdentityValue,
    formState: { errors: identityErrors },
  } = useForm({
    resolver: yupResolver(identitySchema),
  });

  // const userData = useSelector((state) => state.userInfoSlice.userInfo);
  // const userUid = useSelector((state) => state.userSlice.userUid);
  const [userSexeSelected, setUserSexeSelected] = useState("");
  const [profilImage, setProfilImage] = useState(null);
  const [uploadImageError, setUploadImageError] = useState(null);
  const [file, setFile] = useState(null);
  const uploadImageInputRef = useRef(null);
  // const userProfilImage = userData?.profil_image;
  // const userlastname = userData?.lastname;
  // const userFirstname = userData?.firstname;
  // const userBirthDate = userData?.birth_date;
  // const userSexe = userData?.sexe;
  // useEffect(() => {
  //   if (userData) {
  //     setIdentityValue("firstname", userFirstname);
  //     setIdentityValue("lastname", userlastname);
  //     setInfoValue("birth_date", userBirthDate);
  //     setUserSexeSelected(userSexe);
  //   }
  // }, [userData]);

  // const inituserName =
  //   userFirstname?.charAt(0).toUpperCase() +
  //   userlastname?.charAt(0).toUpperCase();

  // update user data in firestore
  const identityFormSubmit = async (data) => {
    const { firstname, lastname } = data;
    if (firstname === userFirstname && lastname === userlastname) {
      alert("Les noms et prénoms sont les mêmes qu'auparavant.");
      return;
    }
    // Déterminez les champs à mettre à jour
    const updatedData = {};
    if (firstname !== userFirstname) updatedData.firstname = firstname;
    if (lastname !== userlastname) updatedData.lastname = lastname;
    await UPDATE_UserData(userUid, updatedData, dispatch);
  };

  // update user data birthdate and sexe in firestore
  const infoFormSubmit = async (data) => {
    const { birth_date } = data;
    if (birth_date === userBirthDate && userSexeSelected === userSexe) {
      setUploadImageError(
        "La date de naissance et le sexe sont les mêmes qu'auparavant."
      );
      return;
    }
    // Déterminez les champs à mettre à jour
    const updatedData = {};
    if (birth_date !== userBirthDate) updatedData.birth_date = birth_date;
    if (userSexeSelected !== userSexe)
      updatedData.sexe_id = userSexeSelected?.id;
    console.log(updatedData);
    await UPDATE_UserData(userUid, updatedData, dispatch);
  };

  //upload profil Image
  async function handleImageChange(event) {
    const file = event.target.files[0];

    // Vérifier si le fichier est une image
    if (!file.type.match("image.*")) {
      setUploadImageError("Sélectionnez uniquement un fichier image.");
      return;
    }

    // Vérifier la taille du fichier (< 10 Mo)
    if (file.size > 1024 * 1024 * 10) {
      setUploadImageError(
        "Le fichier est trop volumineux. Taille maximale : 10 Mo."
      );
      return;
    }

    // Options de compression
    const options = {
      maxSizeMB: 1, // La taille maximale de l'image après compression
      maxWidthOrHeight: 1920, // La largeur ou la hauteur maximale de l'image
      useWebWorker: true,
    };

    try {
      // Compresser l'image
      const compressedFile = await imageCompression(file, options);

      // Vous pouvez maintenant utiliser compressedFile pour l'upload, par exemple en mettant à jour l'état local
      // et en passant compressedFile à POST_profilImage pour l'upload
      setFile(compressedFile);
      const previewUrl = URL.createObjectURL(compressedFile);
      setProfilImage(previewUrl);
    } catch (error) {
      console.log(error);
    }
  }
  const handleChangeImage = () => {
    uploadImageInputRef.current.click();
  };

  const handleSubmitImage = () => {
    if (file) {
      POST_profilImage(userUid, file, dispatch);
    }
  };
  return (
    <div className={style.personalInfoContainer}>
      <div className={style.myPhotoContainer}>
        <input
          ref={uploadImageInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleImageChange}
          accept="image/*"
        />
        <FaPen
          size={25}
          onClick={handleChangeImage}
          className={style.pen}
          color="#fff"
        />
        <h3>Ma photo</h3>

        <div className={style.profilImage} onClick={handleChangeImage}>
          <p>Ma</p>
        </div>

        <div className={style.warningContainer}>
          {uploadImageError && <CiWarning color="red" size={20} />}
          <p>{uploadImageError}</p>
        </div>

        {file && <Btn title="Enregistrer" onClick={handleSubmitImage} />}
      </div>

      <div className={style.infoContainer}>
        <h3>Identité</h3>
        <form onSubmit={handleIdentitySubmit(identityFormSubmit)}>
          <label htmlFor="Nom">Email</label>
          <InputComponent
            register={registerIdentity}
            registerText="email"
            errors={identityErrors}
            placeholderText="Email"
            type="text"
          />
          <label htmlFor="Nom">Nom et prénom</label>
          <InputComponent
            register={registerIdentity}
            registerText="name"
            errors={identityErrors}
            placeholderText="Nom et prénom"
            type="text"
          />
          <Btn title="Enregistrer" isInput />
        </form>
      </div>
    </div>
  );
}
