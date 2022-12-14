export default function Form() {
  return (
    <div className="flex flex-col justify-center items-center bg-purple-800">
      <h1 className="text-white">INSCRIPTION</h1>
      <form className="flex flex-col justify-center items-center">
        <label className="flex flex-col justify-center text-white">
          Prénom
          <input
            type="text"
            name="Prénom"
            className="border-2 border-white bg-transparent"
          />
        </label>
        <label className="flex flex-col justify-center text-white">
          Nom
          <input
            type="text"
            name="name"
            className="border-2 border-white bg-transparent"
          />
        </label>
        <label className="flex flex-col justify-center text-white">
          Adresse email
          <input
            type="text"
            name="Adresse-email"
            className="border-2 border-white bg-transparent"
          />
        </label>
        <label className="flex flex-col justify-center text-white">
          Mot de passe
          <input
            type="text"
            name="Mot-de-passe"
            className="border-2 border-white bg-transparent"
          />
        </label>
        <label className="flex flex-col justify-center text-white ">
          Confirmé le mot le passe
          <input
            type="text"
            name="Confirmé-le-mot-le-passe"
            className="border-2 border-white bg-transparent"
          />
        </label>
        <input type="submit" value="S'INSCRIRE" className="text-white" />
      </form>
    </div>
  );
}
