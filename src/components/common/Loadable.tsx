import { ElementType, Suspense } from 'react';
import {CircularProgress} from "@mui/material";

const Loadable = (Component: ElementType) =>
  function (props: any) {
    return (
      <Suspense fallback={<CircularProgress />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
