import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";

export const Dropdown= ({
  items,
  setItem,
})  => {
  const initialValue = "I would describe my user type as";
  const dropWrap = useRef(null);
  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialValue);
  const [options, setOptions] = useState([]);

  const handleChange = (item) => {
    setOpened(false);
    setSelectedItem(item);
    setItem(item);
  };

  const resetFilter = () => {
    setOpened(false);
    setSelectedItem("All");
    setItem(null);
  };


  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (opened && dropWrap.current && !dropWrap.current.contains(e.target)) {
        setOpened(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [opened]);

  return (
    <div className={`${styles.container}`}>
      <div className={styles.select_box} ref={dropWrap}>
        <div
          className={`${styles.options_container} ${opened ? styles.active : ""
            }`}
        >
          {options.length > 0
            ? options?.map((element, index) => {
              return (
                <div
                  className={styles.option}
                  key={index}
                  onClick={() => handleChange(element)}
                >
                  <input type="radio" name="category" />
                  <label>{element}</label>
                </div>
              );
            })
            : items?.map((element, index) => {
              return (
                <div
                  className={styles.option}
                  key={index}
                  onClick={() => handleChange(element)}
                >
                  <input type="radio" name="category" />
                  <label>{element}</label>
                </div>
              );
            })}
        </div>
        <div className={styles.selected} onClick={() => setOpened(!opened)}>
          {selectedItem}
        </div>
      </div>
    </div>
  );
};
