import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type MotoListProps = {
  data?: Array<{
    id: string
    img: string
    name: string
  }
  >
}

// Este é um exemplo de mock

/* const mock = [
  {
    id: '1',
    img: 'https://www.motonline.com.br/noticia/wp-content/uploads/2022/03/dafra-horizon-150-WMIMAGEM23513614688.jpg',
    name: 'HORIZON 150',
  },
  {
    id: '2',
    img: 'https://bestriders.com.br/wp-content/uploads/2011/09/EPI201109_bestriders_kasinskimirage_10001.jpg',
    name: 'MIRAGE 250',
  },
  {
    id: '3',
    img: 'https://www.motonline.com.br/noticia/wp-content/uploads/2021/02/Suzuki-Intruder-125-3.jpg',
    name: 'INTRUDER 125',
  },
  {
    id: '4',
    img: 'https://scontent.fcpq17-1.fna.fbcdn.net/v/t1.18169-9/423607_283087985139663_1775989463_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeFaxHvFBI68t7bxJSNXg7Q3uLSWIyHtcDe4tJYjIe1wN3hUOBnhcyI8NwY3TuKZryIFSSt2gWgCi0iwGzLzyMwo&_nc_ohc=D0cJTh1NOVEAX-TuHuD&_nc_ht=scontent.fcpq17-1.fna&oh=00_AfDDAW2r0oqjZ4xr-jHTXV3SDdzCLOzHEkOpmj3erDnI1w&oe=63B948A3',
    name: 'V-BLADE 250',
  },
  {
    id: '5',
    img: 'https://www.motonline.com.br/noticia/wp-content/uploads/2021/01/virago-250-destaque-800x420.jpg',
    name: 'VIRAGO 250',
  },
  {
    id: '6',
    img: 'https://www.motonline.com.br/noticia/wp-content/uploads/2011/02/amazonas-esta-de-volta-1.jpg',
    name: 'AMAZONAS 250',
  },
  {
    id: '7',
    img: 'https://cdn.salaodocarro.com.br/_upload/motos/2018/10/29/dafra-kansas-2014-preta-9875-0.webp',
    name: 'KANSAS 150',
  },
  {
    id: '8',
    img: 'https://storage.googleapis.com/images-homolog-moto.usadosbr.com/img/2009/08/12/img24285-1250077050-v580x435.jpg',
    name: 'KANSAS 250',
  },
  {
    id: '9',
    img: 'https://www.motonline.com.br/noticia/wp-content/uploads/2013/06/Horizon-branca.jpg',
    name: 'HORIZON 250',
  },
  {
    id: '10',
    img: 'https://media.gazetadopovo.com.br/2010/03/d7eccdd2ac561d3b3c0b9984815ea553-gpLarge.jpg',
    name: 'MIRAGE 150',
  },
  {
    id: '11',
    img: 'https://www.motonline.com.br/noticia/wp-content/uploads/2021/02/Yamaha-XVS-650-Drag-Star-3-800x420.jpg',
    name: 'DRAG STAR',
  },
  {
    id: '12',
    img: 'https://u.motoscdn.com.br/websites/3NFTJR/pages/JRM7OXNR/VFSTU1CGNJPR/image/9628/conversions/diferencias-chopper-%281%29-desktop.jpg?v=5a2bdc18',
    name: 'CHOPPER ROAD 150',
  },
] */

export const MotoList = ({ data }: MotoListProps) => {

  return (

    <View style={styles.container}>


      {/* A View abaixo serve apenas como base de medida até o header ser feito*/}
      <View>
        <Text style={styles.fakeHeader}>
        </Text>
      </View>


      <View style={{ flex: 1 }}>
        <FlatList

          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={data}
          renderItem={(item) => {
            return (
              <View>
                <TouchableOpacity onPress={() => alert('Incluir rota da página de lista de peças Horizon 150')}>
                  <Image
                    source={{ uri: item.item.img }}
                    style={styles.motoImg}
                  />

                  <Text style={styles.motoName}>
                    {item.item.name}
                  </Text>
                </TouchableOpacity>

              </View>
            )
          }}
        />
      </View>
    </View>
  )
}