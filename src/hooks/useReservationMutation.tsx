import { useMutation } from "@tanstack/react-query";
import { ReserveValues } from "../models/reserve";
import { reserve } from "../remote/reserve";

function useReservationMutation() {
  return useMutation({
    mutationFn: (reserveValues: ReserveValues) => reserve(reserveValues),
    onSuccess: () => {
      console.log("success");
    },
  });
}

export default useReservationMutation;
