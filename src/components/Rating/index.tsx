import { FC, HTMLAttributes, useEffect, useState, DetailedHTMLProps, KeyboardEvent } from 'react';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './star.svg';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

export const Rating: FC<RatingProps> = ({ isEditable = false, rating, setRating, ...props }) => {
  const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const handleClick = (i: number) => {
    if (!isEditable) return;
    setRating?.(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space') return;
    setRating?.(i);
  };

  const constructRating = (curRating: number) => {
    const updatedArr = ratingArray.map((r, i) => (
      <span
        key={`${r}_${i}`}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => handleClick(i + 1)}
      >
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: i < curRating,
            [styles.editable]: isEditable,
          })}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
        />
      </span>
    ));
    setRatingArray(updatedArr);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={`${r}_${i}`}>{r}</span>
      ))}
    </div>
  );
};
