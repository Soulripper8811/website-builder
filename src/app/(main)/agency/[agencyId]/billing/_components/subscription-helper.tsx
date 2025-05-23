"use client";
import SubscriptionFormWrapper from "@/components/forms/subscription-form/subscription-form-wrapper";
import CustomModal from "@/components/global/custom-modal";
import { PricesList } from "@/lib/types";
import { useModal } from "@/providers/modal-provider";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  prices: PricesList["data"];
  customerId: string;
  planExists: boolean;
};

const SubscriptionHelper = ({ prices, customerId, planExists }: Props) => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const { setOpen } = useModal();

  useEffect(() => {
    if (plan) {
      setOpen(
        <CustomModal
          title="Upgrade plan!"
          subheading="Get started today to get access to premium features"
        >
          <SubscriptionFormWrapper
            planExists={planExists}
            customerId={customerId}
          />
        </CustomModal>,
        async () => ({
          plans: {
            defaultPriceId: plan ? plan : "",
            plans: prices,
          },
        })
      );
    }
  }, [plan]);

  return <div>SubscriptionHelper</div>;
};

export default SubscriptionHelper;
