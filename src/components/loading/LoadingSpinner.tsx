//Third-party modules
import { ClipLoader } from "react-spinners";

//User-modules
import c from "./styles/spinner.module.css";

interface LoadingSpinnerProps {
  size?: number;
  thickeness?: string;
  loading?: boolean;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  return (
    <div
      className={`${c.spinner_container_display} ${
        props.loading ? c.spinner_container_display : ""
      }`}
    >
      <ClipLoader
        color="#36d7b7"
        size={props.size || 50}
        cssOverride={{
          borderWidth: `${props.thickeness ? props.thickeness : "6px"}`, // increase the stroke thickness
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
