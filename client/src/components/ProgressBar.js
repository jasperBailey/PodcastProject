import styled from "styled-components";

const ProgressBar = ({ progressBarRef }) => {
    return (
        <ProgressBarDiv>
            <ProgressBarCurrent ref={progressBarRef} />
        </ProgressBarDiv>
    );
};

export default ProgressBar;

export const ProgressBarDiv = styled.div`
    height: 4px;
    background-color: rgba(255, 0, 0, 0.3);
`;

export const ProgressBarCurrent = styled.div`
    height: 4px;
    background-color: red;
`;
