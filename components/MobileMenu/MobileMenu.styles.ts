import styled from "styled-components";

interface MobileIconProps {
    open: boolean;
}
export const MobileMenuContainer = styled.div<MobileIconProps>`
    background: #fff;
    width: 100%;
    position: absolute;
    left: 0;
    justify-content: center;
    display: ${(props) => (props.open ? `flex` : `none`)};
`;

export const MobileNavLinks = styled.ul`
    display: none;
    flex-direction: column;
    list-style-type: none;
    align-items: center;
    @media screen and (max-width: 576px) {
        display: flex;
    }
`;

export const MobileNavbarItem = styled.li`
    margin-top: 10px;
    cursor: pointer;

    &:last-child {
        margin-bottom: 10px;
    }
`;
