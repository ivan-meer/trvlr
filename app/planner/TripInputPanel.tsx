import { BsChevronBarRight } from 'react-icons/bs';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Box, Button, Center, Group, Stack, Title } from '@mantine/core';
import useStepperStore, { TripStep } from '../state-management/stepper-store';
import StepContainer from './steps/StepContainer';

const TripInputPanel = () => {
  const step = useStepperStore((store) => store.step);
  const nextStep = useStepperStore((store) => store.nextStep);
  const prevStep = useStepperStore((store) => store.prevStep);

  const titleMap = {
    [TripStep.TRIP_DETAILS]: "Let's get this trip started!",
    [TripStep.PREFERENCES]: 'Answer a few questions to get personalized suggestions',
    [TripStep.DESTINATIONS]: 'Choose which cities you want to visit!',
    [TripStep.ACTIVITIES]: 'Now the fun part... selecting activities and meals!',
    [TripStep.TRANSPORTATION]: "Let's figure out the best way to get around",
    [TripStep.FINAL_REIVEW]: 'Take a few minute to review your trip!',
  };

  return (
    <Center h="100%">
      <Stack justify="space-between" h="100%" align="center" pt="3rem" maw="800px">
        <Title ta="center">{titleMap[step]}</Title>
        <Box mb="xl">
          <StepContainer />
        </Box>

        <Group justify="center" pb="3rem">
          <Button
            onClick={prevStep}
            variant="default"
            disabled={step === TripStep.TRIP_DETAILS}
            leftSection={<MdChevronLeft />}
          >
            Previous
          </Button>
          <Button
            bg="primary"
            onClick={nextStep}
            disabled={step === TripStep.FINAL_REIVEW}
            rightSection={<MdChevronRight />}
          >
            Next Step
          </Button>
        </Group>
      </Stack>
    </Center>
  );
};

export default TripInputPanel;
