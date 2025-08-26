import ButtonL from "@/components/common/buttonL";
import { ChevronRight } from "lucide-react";
import React from "react";

interface Props {
    measurement: "metric" | "imperial";
    setMeasurement: (measurement: "metric" | "imperial") => void;
}

function MeasurementButton({ measurement, setMeasurement }: Props) {
    return (
        <div className="relative flex items-center justify-center gap-2">
            <div className="flex relative rounded-full bg-primary/80 overflow-hidden">
                <ButtonL
                    onClick={() => setMeasurement("imperial")}
                    className="px-8 py-2 ml-3"
                >{`Product.metric`}</ButtonL>
                <ButtonL
                    onClick={() => setMeasurement("metric")}
                    className={`absolute flex justify-center w-full! h-full bg-primary ${
                        measurement === "metric"
                            ? "-translate-x-full"
                            : "-translate-x-3"
                    } duration-500`}
                >{`Product.imperial`}</ButtonL>
            </div>
            <div
                className={`absolute flex items-center justify-center h-8 aspect-square rounded-full bg-tertiary ${
                    measurement === "imperial"
                        ? "right-0"
                        : "right-full translate-x-full"
                } duration-500`}
            >
                <ChevronRight
                    onClick={() =>
                        measurement === "metric"
                            ? setMeasurement("imperial")
                            : setMeasurement("metric")
                    }
                    className={`text-primary cursor-pointer ${
                        measurement === "imperial"
                            ? "-rotate-y-180 mr-0.5"
                            : "ml-0.5"
                    } duration-500`}
                />
            </div>
        </div>
    );
}

export default MeasurementButton;
