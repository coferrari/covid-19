import React, { useEffect } from "react";
import { getAll } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
    const dispatch = useDispatch()
    const { statistics } = useSelector((state) => state.statistics)

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    return (
        <div>
            {statistics?.map((country) => <h5>{country.country}</h5>)}

        </div>
    )
}

export default Main;