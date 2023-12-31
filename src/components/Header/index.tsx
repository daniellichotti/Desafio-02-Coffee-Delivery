import { MapPin, ShoppingCart } from 'phosphor-react';
import {
    CartContainer,
    Container,
    EndContainerIcons,
    IconsContainer,
    LocationContainer,
    LogoContainer,
} from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <Container>
            <IconsContainer>
                <LogoContainer>
                    <img src={logoImg} alt="Coffee Delivery" />
                </LogoContainer>
                <EndContainerIcons>
                    <LocationContainer>
                        <MapPin size={22} color="#8047F8" weight="fill" />
                        <p>Porto Alegre, RS</p>
                    </LocationContainer>
                    <CartContainer>
                        <ShoppingCart size={22} color="#C47F17" weight="fill" />
                    </CartContainer>
                </EndContainerIcons>
            </IconsContainer>
        </Container>
    );
}
