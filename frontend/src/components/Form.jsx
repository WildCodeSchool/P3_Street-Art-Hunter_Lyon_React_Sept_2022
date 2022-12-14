export default function Form() {
  return (
    <div className="absolute bg-home-image bg-cover w-full h-screen">
      <div className="flex flex-col justify-center items-center backdrop-blur-sm rounded-[3rem] mt-60">
        <h1 className="text-white font-main-font text-4xl mb-5 mt-8">
          INSCRIPTION
        </h1>
        <form className="flex flex-col justify-center items-center space-y-8 mb-4">
          <label className="flex flex-col justify-center text-white">
            Prénom
            <input
              type="text"
              name="Prénom"
              className="border rounded-[3rem] border-white bg-transparent"
            />
          </label>
          <label className="flex flex-col justify-center text-white">
            Nom
            <input
              type="text"
              name="name"
              className="border rounded-[3rem] border-white bg-transparent"
            />
          </label>
          <label className="flex flex-col justify-center text-white">
            Adresse email
            <input
              type="text"
              name="Adresse-email"
              className="border rounded-[3rem] border-white bg-transparent"
            />
          </label>
          <label className="flex flex-col justify-center text-white">
            Mot de passe
            <input
              type="text"
              name="Mot-de-passe"
              className="border rounded-[3rem] border-white bg-transparent"
            />
          </label>
          <label className="flex flex-col justify-center text-white ">
            Confirmé le mot le passe
            <input
              type="text"
              name="Confirmé-le-mot-le-passe"
              className="border rounded-[3rem] border-white bg-transparent"
            />
          </label>
          <input
            type="submit"
            value="S'INSCRIRE"
            className="bg-gradient-to-tl from-pink to-lightblue rounded-3xl font-main-font text-[32px] py-1 px-6"
          />
        </form>
      </div>
    </div>
  );
}
