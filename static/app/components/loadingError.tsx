type Props = {
  message?: React.ReactNode;
  onRetry?: () => void;
};

/**
 * Renders an Alert box of type "error". Renders a "Retry" button only if a
 * `onRetry` callback is defined.
 */
function LoadingError({
  onRetry,
  message = 'There was an error loading data.',
}: Props): JSX.Element {
  return (
    <div>
      {message}
      <button onClick={onRetry} type="button">
        Retry
      </button>
    </div>
  );
}

export default LoadingError;
