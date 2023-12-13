import { useDispatch, useSelector } from "react-redux";
import { pathSelector } from "../store/selector/pathSelector";
import { useNavigate } from "react-router-dom";
import { pathActions } from "../store/reducer/path";

type Props = {};

const Path = (props: Props) => {
  const paths = useSelector(pathSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center gap-2">
        {paths.map((p, index) => (
          <div
            key={`path-${index}`}
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => {
              navigate(p.path);
              dispatch(pathActions.setPath(paths.slice(0, index + 1)));
            }}
          >
            <div className="font-semibold hover:text-green-500 transition">
              {p.name}
            </div>
            <div className="font-semibold">{`>`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Path;
