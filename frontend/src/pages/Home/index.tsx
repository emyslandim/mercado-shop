import { Card } from "../../components/Card";
import { PaymentsService } from "../../services/payments/payment-service";
import { Container, CopyQr } from "./styles";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";

const products = [
  {
    name: "Vestido vermelho fino",
    price: 66.99,
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/06/01/15909857999cfda5bfe5566d10b61e4cb0700448e3_thumbnail_405x552.webp",
  },
  {
    name: "Vestido bege",
    price: 85.95,
    image:
      "https://img.ltwebstatic.com/images3_pi/2023/03/08/167825188983341d4bc6816c914c5447cddef64868_thumbnail_405x552.webp",
  },
  {
    name: "Vestido vermelho alças",
    price: 102.0,
    image:
      "https://img.ltwebstatic.com/images3_pi/2023/03/01/1677676917a47becfb2d400c7be1fade405f960d14_thumbnail_405x552.webp",
  },
];

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<any>({});

  const copiarTexto = () => {
    let textoCopiado: any = document.getElementById("texto");
    textoCopiado?.select();
    textoCopiado?.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado");
  };

  useEffect(() => {
    console.log(paymentInfo);
    if (paymentInfo.id) {
      setShowModal(true);
    }
  }, [paymentInfo]);
  const buyProduct = (name: string, price: number) => {
    PaymentsService.createPayment({
      description: name,
      installments: 1,
      payer: {
        email: "jhon@doe.com",
      },
      payment_method_id: "pix",
      transaction_amount: price,
    }).then((response) => setPaymentInfo(response.data));
  };
  return (
    <Container>
      {showModal && (
        <Modal
          title="Pagamento"
          handleClose={() => setShowModal(false)}
          style={{ width: "100px" }}
        >
          <p>
            <span>Produto: </span>
            <strong>{paymentInfo.description}</strong>
          </p>
          <p>
            <span>Valor: </span>
            <strong>{paymentInfo.transaction_amount}</strong>
          </p>
          <h5>Escaneie este código para pagar</h5>
          <QRCode value={paymentInfo.qr_code_base64} />

          <h5>Ou copie este código QR para fazer o pagamento</h5>
          <CopyQr>
            <input
              type="text"
              name="texto"
              id="texto"
              value={paymentInfo.point_of_interaction.transaction_data.qr_code}
              readOnly
            />
            <button onClick={() => copiarTexto()}>Copiar</button>
          </CopyQr>
        </Modal>
      )}
      {products.map((item) => (
        <Card
          name={item.name}
          image={item.image}
          price={item.price}
          onClick={() => buyProduct(item.name, item.price)}
        />
      ))}
    </Container>
  );
}

export default Home;
