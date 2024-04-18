import React from 'react'

import { Title } from '../../../components/Title/Title'
import { Text } from '../../../components/Text/Text'
import { Container } from '../../../components/Container/Container'
import { Button } from '../../../components/Button/Button'
import { Input } from '../../../components/Input/Input'
import { CardImg } from '../../../components/CardImg/CardImg'

import Img from '../../../images/Img1.png'
import Img2 from '../../../images/Img2.png'
import Img3 from '../../../images/Img3.png'

export default function App() {
  return (
    <div>
        <Container>
            <Title Component='h2' className='text-[var(--constant-green)]'>Встречайте новые яркие кварталы!</Title>
            <Title className='text-[var(--constant-blue)]'>Встречайте новые яркие кварталы!</Title>
            <Text>Здесь так же душевно и уютно, как в старом добром «Ярком», но ещё лучше, современнее и интереснее.</Text>
            <Button variant='red'>Посмотреть квартиры</Button>
            <Button>Оставить заявку</Button>
            <Button variant='blue'>Оставить заявку</Button>
            <div>.</div>
            <Input placeholder='Имя'/>
            <div className='flex gap-5 mt-5'>
            <CardImg alt=''src={Img}>
                 Инфраструктура микрогорода
            </CardImg>
            <CardImg alt=''src={Img2}>
            Видовые<br/>квартиры
            </CardImg>
            <CardImg alt=''src={Img3}>
            Свой парк <br/>и набережная
            </CardImg>
            </div>
        </Container>
    </div>
  )
}
