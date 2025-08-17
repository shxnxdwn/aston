import type { ComponentType } from 'react';
import Loader from '../../ui/Loader';

type WithLoadingProps = {
  isLoading: boolean;
};

const withLoading = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P & WithLoadingProps) => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Loader />;
    }

    return <WrappedComponent {...(restProps as P)} />;
  };
};

export default withLoading;
