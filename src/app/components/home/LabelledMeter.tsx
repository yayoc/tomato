import React from "react";
import { Grommet, Box, Meter, Stack, Text } from "grommet";
import { grommet } from "grommet/themes";

type Props = {
  value: number;
  label: string;
};

export const LabelledMeter = ({ value, label }: Props) => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Stack anchor="center">
        <Meter
          type="circle"
          background="light-2"
          values={[{ label, value }]}
          size="xsmall"
          thickness="small"
        />
        <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
          <Text size="xlarge" weight="bold">
            {label}
          </Text>
        </Box>
      </Stack>
    </Box>
  </Grommet>
);
