import styled from 'styled-components';

export const Container = styled.header`
    height: 104px;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IconsContainer = styled.div`
    margin: 32px 160px 32px 160px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div``;

export const EndContainerIcons = styled.div`
    display: flex;
`;

export const LocationContainer = styled.div`
    background-color: #ebe5f9;
    border-radius: 10px;
    height: 38px;
    width: 143px;
    margin-right: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 14px;
        color: #8047f8;
        text-shadow: 2px 2px 4px black;
    }
`;
export const CartContainer = styled.div`
    height: 38px;
    width: 38px;
    background-color: #f1e9c9;
    margin-left: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
