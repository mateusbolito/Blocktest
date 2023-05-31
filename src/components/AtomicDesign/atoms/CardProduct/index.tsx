import { Box } from '@mui/material'
import arrowUp from '../../../../assets/ArrowUp.svg'
import { ContainerCard, ContentImg, FooterCard } from './styles'

export default function CardProduct(item: any, key: number) {
    
    return (
        <ContainerCard>
            <ContentImg>
            <img src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${item?.item?.id}.jpg`} alt="" />
            </ContentImg>
            <FooterCard>
                <p>{item?.item?.details?.description}</p>
                <Box sx={{border: '1px solid #cccccc', width: '20px', transform: 'rotate(-90deg)'}}/>
                <img src={arrowUp} alt="" />
            </FooterCard>
        </ContainerCard>
    )
}