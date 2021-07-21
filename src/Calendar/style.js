import styled from 'styled-components';

export const CalendarContainer = styled.div`
    position: relative;
`;

export const CalendarSelect = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 324px;
    min-width: 220px;
    /* height: ${(props) => props.theme.spacing.space_x4};
    color: ${(props) => props.theme.colors.light_blue};
    border-radius: ${(props) => props.theme.spacing.space_half};
    border: 1px solid ${(props) => props.theme.colors.light_blue};
    font-size: ${(props) => props.theme.fontSizes.placeholder};
    font-family: ${(props) => props.theme.fonts[1]};
    padding: ${(props) => props.theme.spacing.space}; */
    padding-left: 12px;
`;

export const CalendarPicker = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 30px 125px;
    align-items: center;
    justify-items: center;
    top: 50px;
    left: 0;
    width: 100%;
    max-width: 324px;
    min-width: 220px;
    height: 175px;
    /* border-radius: ${(props) => props.theme.spacing.space_half};
    border: 1px solid ${(props) => props.theme.colors.light_blue};
    font-size: ${(props) => props.theme.fontSizes.placeholder};
    padding: ${(props) => props.theme.spacing.space}; */
`;

export const CalendarPickerItem = styled.div`
    width: 100%;
    transform-style: preserve-3d;
`;

export const PickerItem = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 102px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
    overscroll-behavior-y: contain;
    scroll-snap-type: y proximity;
`;

export const Label = styled.label`
    /* position: absolute;
    left: 0;
    right: 0; */
    padding: 5px 0;
    margin: 0 auto;
    transition: transform 0.5s ease;
    cursor: pointer;
    display: grid;
    place-items: center;
    width: 50%;
    height: 100%;
    scroll-snap-align: center;
`;
