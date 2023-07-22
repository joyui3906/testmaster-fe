const Breakpoint = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export type BreakpointVariant = keyof typeof Breakpoint;

export default Breakpoint;
