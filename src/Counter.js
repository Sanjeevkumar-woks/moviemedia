import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      {/* <button className="like" onClick={() => setLike(like + 1)}>
              <span>👍</span>
              {like}
            </button>
            <button className="dislike" onClick={() => setDisLike(disLike + 1)}>
              <span>👎</span>
              {disLike}
            </button> */}
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => setLike(like + 1)}>👍{like}</Button>
        <Button onClick={() => setDisLike(disLike + 1)}>👎{disLike}</Button>
      </ButtonGroup>
    </div>
  );
}
