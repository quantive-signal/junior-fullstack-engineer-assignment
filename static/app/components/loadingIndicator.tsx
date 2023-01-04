type Props = {
  children?: React.ReactNode;
  className?: string;
  dark?: boolean;
  hideMessage?: boolean;
  hideSpinner?: boolean;
  mini?: boolean;
  overlay?: boolean;
  relative?: boolean;
  size?: number;
  style?: React.CSSProperties;
};

function LoadingIndicator(props: Props) {
  const {children, hideMessage, hideSpinner} = props;

  return (
    <div>
      {!hideSpinner && <p>Component loading spinner </p>}
      {!hideMessage && <p>Component loading message {children} </p>}
    </div>
  );
}

export default LoadingIndicator;
