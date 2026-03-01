"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  miniLeadFormSchema,
  fullLeadFormSchema,
  type MiniLeadFormValues,
  type FullLeadFormValues,
} from "@/lib/validations";
import { BUDGET_OPTIONS, TRUCK_OPTIONS } from "@/lib/constants";
import { ArrowRight, Loader2, User, Phone, Mail, Building2, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  variant: "mini" | "full";
  className?: string;
  dark?: boolean;
}

export function LeadForm({ variant, className, dark = false }: LeadFormProps) {
  if (variant === "mini") {
    return <MiniForm className={className} dark={dark} />;
  }

  return <FullForm className={className} dark={dark} />;
}

function MiniForm({
  className,
  dark,
}: {
  className?: string;
  dark: boolean;
}) {
  const [shakeKey, setShakeKey] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MiniLeadFormValues>({
    resolver: zodResolver(miniLeadFormSchema),
  });

  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data: MiniLeadFormValues) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong");
      }
      const name = encodeURIComponent(data.firstName.trim());
      window.location.href = `/thank-you?name=${name}`;
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const onError = () => {
    setShakeKey((k) => k + 1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className={cn("space-y-4", className)}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div key={`name-${shakeKey}`} className={cn(errors.firstName && "animate-shake")}>
          <Label htmlFor="mini-name" className="sr-only">
            Your Name
          </Label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/25" />
            <Input
              id="mini-name"
              placeholder="Your Name"
              {...register("firstName")}
              className={cn(
                "h-12 rounded-xl border-white/15 bg-white/8 pl-10 text-white placeholder:text-white/50 transition-all duration-200",
                errors.firstName
                  ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                  : "focus:border-amber focus:ring-2 focus:ring-amber/20"
              )}
            />
          </div>
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>
          )}
        </div>
        <div key={`phone-${shakeKey}`} className={cn(errors.phone && "animate-shake")}>
          <Label htmlFor="mini-phone" className="sr-only">
            Phone Number
          </Label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/25" />
            <Input
              id="mini-phone"
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className={cn(
                "h-12 rounded-xl border-white/15 bg-white/8 pl-10 text-white placeholder:text-white/50 transition-all duration-200",
                errors.phone
                  ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                  : "focus:border-amber focus:ring-2 focus:ring-amber/20"
              )}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div key={`email-${shakeKey}`} className={cn(errors.email && "animate-shake")}>
          <Label htmlFor="mini-email" className="sr-only">
            Email (Optional)
          </Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/25" />
            <Input
              id="mini-email"
              type="email"
              placeholder="Email (Optional)"
              {...register("email")}
              className={cn(
                "h-12 rounded-xl border-white/15 bg-white/8 pl-10 text-white placeholder:text-white/50 transition-all duration-200",
                errors.email
                  ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                  : "focus:border-amber focus:ring-2 focus:ring-amber/20"
              )}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div key={`company-${shakeKey}`} className={cn(errors.company && "animate-shake")}>
          <Label htmlFor="mini-company" className="sr-only">
            Company Name
          </Label>
          <div className="relative">
            <Building2 className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/25" />
            <Input
              id="mini-company"
              placeholder="Company Name"
              {...register("company")}
              className={cn(
                "h-12 rounded-xl border-white/15 bg-white/8 pl-10 text-white placeholder:text-white/50 transition-all duration-200",
                errors.company
                  ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
                  : "focus:border-amber focus:ring-2 focus:ring-amber/20"
              )}
            />
          </div>
          {errors.company && (
            <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>
          )}
        </div>
      </div>
      <label className="group flex cursor-pointer select-none items-center gap-3">
        <input type="checkbox" {...register("hasWhatsapp")} className="sr-only" />
        <span className="flex size-5 items-center justify-center rounded-md border border-white/15 bg-white/8 transition-all duration-200 group-has-[:checked]:border-amber group-has-[:checked]:bg-amber">
          <Check className="size-3 text-warm-dark opacity-0 transition-opacity duration-200 group-has-[:checked]:opacity-100" />
        </span>
        <span className="text-sm text-white/60 transition-colors group-hover:text-white/80">
          I use WhatsApp on this number
        </span>
      </label>
      {submitError && (
        <p className="text-sm text-red-400">{submitError}</p>
      )}
      <div className="space-y-2">
        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="h-12 w-full text-base shadow-lg shadow-amber/20 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <>
              Get My Free Marketing Audit
              <ArrowRight className="size-5" />
            </>
          )}
        </Button>
        <p className="text-center text-[11px] text-white/30">
          Free &bull; No obligation &bull; Takes 30 seconds
        </p>
      </div>
    </form>
  );
}

function FullForm({
  className,
  dark,
}: {
  className?: string;
  dark: boolean;
}) {
  const [shakeKey, setShakeKey] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FullLeadFormValues>({
    resolver: zodResolver(fullLeadFormSchema),
  });

  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data: FullLeadFormValues) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong");
      }
      const name = encodeURIComponent(data.firstName.trim());
      window.location.href = `/thank-you?name=${name}`;
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const onError = () => {
    setShakeKey((k) => k + 1);
  };

  const inputClasses = cn(
    "h-12 rounded-xl",
    dark
      ? "border-white/15 bg-white/8 text-white placeholder:text-white/50 focus:border-amber"
      : "border-warm-border"
  );

  const labelClasses = cn("text-sm font-medium", dark ? "text-white/80" : "text-warm-dark");

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className={cn("space-y-5", className)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div key={`fn-${shakeKey}`} className={cn(errors.firstName && "animate-shake")}>
          <Label htmlFor="full-firstName" className={labelClasses}>
            First Name *
          </Label>
          <Input
            id="full-firstName"
            placeholder="John"
            {...register("firstName")}
            className={cn(inputClasses, errors.firstName && "border-red-400")}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>
          )}
        </div>
        <div key={`ln-${shakeKey}`} className={cn(errors.lastName && "animate-shake")}>
          <Label htmlFor="full-lastName" className={labelClasses}>
            Last Name *
          </Label>
          <Input
            id="full-lastName"
            placeholder="Smith"
            {...register("lastName")}
            className={cn(inputClasses, errors.lastName && "border-red-400")}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-400">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div key={`em-${shakeKey}`} className={cn(errors.email && "animate-shake")}>
          <Label htmlFor="full-email" className={labelClasses}>
            Email *
          </Label>
          <Input
            id="full-email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={cn(inputClasses, errors.email && "border-red-400")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div key={`ph-${shakeKey}`} className={cn(errors.phone && "animate-shake")}>
          <Label htmlFor="full-phone" className={labelClasses}>
            Phone *
          </Label>
          <Input
            id="full-phone"
            type="tel"
            placeholder="Your phone number"
            {...register("phone")}
            className={cn(inputClasses, errors.phone && "border-red-400")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div key={`co-${shakeKey}`} className={cn(errors.company && "animate-shake")}>
        <Label htmlFor="full-company" className={labelClasses}>
          Company Name *
        </Label>
        <Input
          id="full-company"
          placeholder="Smith Plumbing Co."
          {...register("company")}
          className={cn(inputClasses, errors.company && "border-red-400")}
        />
        {errors.company && (
          <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="full-trucks" className={labelClasses}>
            Number of Trucks
          </Label>
          <Select onValueChange={(val) => setValue("trucks", val)}>
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {TRUCK_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="full-budget" className={labelClasses}>
            Monthly Marketing Budget
          </Label>
          <Select onValueChange={(val) => setValue("budget", val)}>
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {BUDGET_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="full-message" className={labelClasses}>
          Tell us about your goals (optional)
        </Label>
        <Textarea
          id="full-message"
          placeholder="I'd like to increase my online leads..."
          {...register("message")}
          className={cn(
            "min-h-[100px] rounded-xl",
            dark
              ? "border-white/15 bg-white/8 text-white placeholder:text-white/50 focus:border-amber"
              : "border-warm-border"
          )}
        />
      </div>
      {submitError && (
        <p className="text-sm text-red-400">{submitError}</p>
      )}
      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="h-12 w-full text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          <>
            Get My Free Marketing Audit
            <ArrowRight className="size-5" />
          </>
        )}
      </Button>
    </form>
  );
}
