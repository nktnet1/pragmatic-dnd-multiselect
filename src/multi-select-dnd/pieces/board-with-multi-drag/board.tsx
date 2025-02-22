import { memo, type ReactNode, useEffect, useRef } from 'react';

import invariant from 'tiny-invariant';

import { autoScrollForElements } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/element';
import { Box, Flex, xcss } from '@atlaskit/primitives';

import { GlobalStyles } from '../../util/global-styles';

const boardStyles = xcss({
  margin: '0 auto',
  gap: 'space.200',
  flexDirection: 'row',
  height: '100%',
  boxSizing: 'border-box',
});

const scrollContainerStyles = xcss({
  overflowY: 'auto',
  height: '600px',
  overflowX: 'auto',
  maxWidth: '100vw',
  padding: 'space.100',
});

function Board({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    invariant(ref.current);
    return autoScrollForElements({
      element: ref.current,
    });
  }, []);
  return (
    <>
      <Box ref={ref} xcss={scrollContainerStyles}>
        <Flex xcss={boardStyles}>{children}</Flex>
      </Box>
      <GlobalStyles />
    </>
  );
}

export default memo(Board);
