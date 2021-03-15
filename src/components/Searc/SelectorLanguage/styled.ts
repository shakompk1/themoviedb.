import { makeStyles, Theme } from "@material-ui/core/styles";
import { LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            borderRadius: 10,
            overflow: "hidden",
        },
        label: {
            backgroundColor: LineColor,
            textAlign: "left",
            padding: theme.spacing(0, 1),
        },
        select: {
            width: "100%",
            backgroundColor: LineColor,
        },
    };
});

export default useStyles;
