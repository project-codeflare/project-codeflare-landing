import { Dispatch, ReactNode, SetStateAction } from "react";
import ReactModal from "react-modal";
import { Close } from "@carbon/icons-react";
import styles from "./Lightbox.module.scss";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

ReactModal.setAppElement("#__next");

const Lightbox = ({ open, setOpen, children }: Props) => {
  return (
    <>
      <ReactModal
        onRequestClose={() => setOpen(false)}
        contentLabel="Demo video"
        closeTimeoutMS={700}
        className={styles.lightbox}
        overlayClassName={{
          base: styles.overlay,
          afterOpen: styles.afterOpen,
          beforeClose: styles.beforeClose,
        }}
        isOpen={open}
      >
        <div style={{ position: "relative" }}>
          {children}
          <button
            className={styles.close}
            aria-label="Close video"
            onClick={() => setOpen(false)}
          >
            <Close width="40" height="40" />
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default Lightbox;
