import React from "react";
import Slider from "./Slider";
import ProductBox from "./ProductBox";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/HomeStyle";
import Map from "./Map";

import { sliderTop, sliderBottom } from "./imgUrls";

function Home({ classes }) {
  return (
    <div className={classes.home}>
      <Slider sliderTop={sliderTop} height={40} />
      <h2>
        Jesteśmy liderem sprzedaży, doradztwa i montażu stolarki otworowej.
        Zajmujemy się realizacją najbardziej wymagających projektów, okna,
        drzwi, bramy, zasłony okienne oraz wiele więcej...
      </h2>
      <div className={classes.products}>
        <div className={classes.productLeft}>
          <ProductBox fullHeight name="Okna" />
        </div>
        <div className={classes.productRight}>
          <ProductBox name="Okna" />
          <ProductBox name="Okna" />
          <ProductBox name="Okna" />
          <ProductBox name="Okna" />
        </div>
      </div>
      <div>
        <h3>Co robimy ?</h3>
        <p>
          Jeżeli jesteś w trakcie budowy domu, jest to jedna z najważniejszych
          inwestycji z jaką można się mierzyć. Odpowiedni dobór materiałów w tym
          okien jest elementem niezwykle kluczowym. W gąszczu ofert i propozycji
          jakie otrzymasz, trafny wybór jest naprawdę trudny. Multi Okna jest
          wiodącym na rynku liderem sprzedaży i montażu stolarki otworowej.
          Zajmujemy się realizacją najbardziej wymagających projektów i zadań
          dla naszych klientów. Nasza wiedza i doświadczenie pomoże Tobie w
          decyzji o zakupie produktów dopasowanych do potrzeb i osiągnięcia tym
          samym zadowolenia, bezpieczeństwa, komfortu i spokoju na wiele lat
          użytkowania. Aby Twoja inwestycja okazała się trafna, a nie
          przypadkowym zbiegiem okoliczności zachęcamy do kontaktu z nami.
          Pomożemy w wyborze: okien PVC , okien drewnianych, okien
          drewniano-aluminiowych, okien aluminiowych, drzwi drewnianych, drzwi
          stalowych, drzwi aluminiowych, rolet zewnętrznych, bram garażowych
          segmentowych i bram przemysłowych, parapetów zewnętrznych i parapetów
          wewnętrznych.
        </p>
        <button>umów się na spotkanie</button>
      </div>
      <Slider sliderTop={sliderBottom} height={30} />
      <Map />
    </div>
  );
}

export default withStyles(styles)(Home);
