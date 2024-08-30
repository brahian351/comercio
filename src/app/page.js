import Menu from "./Components/Menu/page";
import Tarjeta from "./Components/Tarjeta/page";

export default function Home() {
  return (
    <>
      <Menu />
      <main className="my-8 container mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* PETS */}
          <Tarjeta enlace={"#"} imagen={"/Pets/nanook.webp"} titulo={"Pets"} texto={"En JORUCA Pets encontraras variedad de prendas y accesorios para los peluditos de la familia."} alto={212} ancho={212} color={"from-sky-200 via-cyan-200 to-sky-400"} />
          {/* HOME */}
          <Tarjeta enlace={"/hogar"} imagen={"/Pets/hogar.webp"} titulo={"Home"} texto={"JORUCA Home quiere que le des un nuevo ambiente a tu hogar."} alto={285} ancho={285} color={"from-emerald-200 via-green-300 to-emerald-400"} />
          {/* FASHION */}
          <Tarjeta enlace={"#"} imagen={"/Pets/fashion.webp"} titulo={"Fashion"} texto={"JORUCA Fashion esta destinada para que encuentres lo que este en tendencia para toda la familia."} alto={288} ancho={288} color={"from-orange-200 via-orange-300 to-orange-300"} />

        </div>
      </main>
    </>
  );
}
