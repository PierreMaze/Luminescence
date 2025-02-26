import LogoLumi from '../../assets/img/Lumi.svg';
import LinkButton from '../../components/button/LinkButton';

const Error = () => {
  return (
    <>
      <section
        id="error-page"
        className="flex bg-sky-50 flex-col items-center justify-center h-screen lg:h-screen"
      >
        <img
          src={LogoLumi}
          className="pb-8 w-40 lg:w-60 lg:pt-24 2xl:w-[30rem]"
          alt="Logo Luminescence de couleur"
        />
        <h2 className="font-kreon">Oups!</h2>
        <p className>Désolé, une erreur imprévue s&apos;est produite.</p>
        <p className=" mt-6">
          <i>Tu t&apos;es perdu ?</i>
        </p>
        <LinkButton to="/" className="mt-4">
          Revenir à l&apos;accueil
        </LinkButton>
      </section>
    </>
  );
};

export default Error;
