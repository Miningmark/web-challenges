import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onAllLights, lightsOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={lightsOn === 0 ? true : false}
        onClick={() => {
          onAllLights(false);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        disabled={lightsOn === 8 ? true : false}
        onClick={() => {
          onAllLights(true);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
