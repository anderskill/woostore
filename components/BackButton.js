// I ENDED UP NOT USING THIS COMPONENT AFTER IMPLEMENTING THE NAV BAR
// THE UI BECAME TO CLUTTERED WITH BOTH

import { useRouter } from "next/router";
import styles from "../styles/BackButton.module.css";

const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      {router.pathname !== "/" && (
        <button
          className={styles.back}
          type="button"
          onClick={() => router.back()}
        >
          {"<"} Back
        </button>
      )}
    </div>
  );
};

export default BackButton;
