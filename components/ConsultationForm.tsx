"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import emailjs from "emailjs-com"
import { motion } from "framer-motion"
import { EMAILJS_CONFIG } from "@/lib/constants"
import { useLanguage } from "@/contexts/LanguageContext"
import { useToast } from "./ToastProvider"

interface ConsultationFormProps {
  onSuccess?: () => void
}

export default function ConsultationForm({ onSuccess }: ConsultationFormProps) {
  const { t } = useLanguage()
  const { showToast } = useToast()
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")

  const validationSchema = Yup.object({
    name: Yup.string().required(t.form.name + " " + t.form.required),
    phone: Yup.string().required(t.form.phone + " " + t.form.required),
    email: Yup.string()
      .email(t.form.invalidEmail)
      .required(t.form.email + " " + t.form.required),
    message: Yup.string().required(t.form.message + " " + t.form.required),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("sending")

      try {
        const result = await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: `Нова заявка на консультацію з сайту.\n\nІм'я: ${values.name}\nТелефон: ${values.phone}\nEmail: ${values.email}\n\nПовідомлення:\n${values.message}`,
          },
          EMAILJS_CONFIG.publicKey
        )

        if (result.status === 200) {
          setStatus("success")
          showToast(
            t.form.successMessage || "Заявку успішно відправлено!",
            "success"
          )
          resetForm()
          setTimeout(() => {
            if (onSuccess) onSuccess()
            setStatus("idle")
          }, 2000)
        } else {
          setStatus("error")
          showToast(
            t.form.errorMessage || "Помилка відправки. Спробуйте ще раз.",
            "error"
          )
        }
      } catch (error) {
        console.error("EmailJS error:", error)
        setStatus("error")
        showToast(
          t.form.errorMessage || "Помилка відправки. Спробуйте ще раз.",
          "error"
        )
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder={t.form.name + " *"}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-600 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-200 text-sm sm:text-base"
        />
        {formik.touched.name && formik.errors.name && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-xs sm:text-sm mt-1 flex items-center space-x-1"
          >
            <span>•</span>
            <span>{formik.errors.name}</span>
          </motion.p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder={t.form.phone + " *"}
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-600 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-200 text-sm sm:text-base"
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-400 text-xs sm:text-sm mt-1">
            {formik.errors.phone}
          </p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder={t.form.email + " *"}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-600 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-200 text-sm sm:text-base"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-400 text-xs sm:text-sm mt-1">
            {formik.errors.email}
          </p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder={t.form.message + " *"}
          rows={6}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-600 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-200 resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
        />
        {formik.touched.message && formik.errors.message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm mt-1 flex items-center space-x-1"
          >
            <span>•</span>
            <span>{formik.errors.message}</span>
          </motion.p>
        )}
      </div>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded flex items-center space-x-2"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>{t.form.success}</span>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded flex items-center space-x-2"
        >
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span>{t.form.error}</span>
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={
          status !== "sending"
            ? {
                scale: 1.02,
                transition: { duration: 0.2 },
              }
            : {}
        }
        whileTap={status !== "sending" ? { scale: 0.98 } : {}}
        className="w-full px-5 sm:px-6 py-3 sm:py-3.5 bg-gold text-dark-700 font-semibold rounded hover:bg-gold-600 transition-colors glow-gold-sm disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden text-sm sm:text-base"
      >
        {status === "sending" && (
          <motion.div
            className="absolute inset-0 bg-gold-600"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              x: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        )}
        <span className="relative z-10">
          {status === "sending" ? t.form.sending : t.form.send}
        </span>
      </motion.button>
    </form>
  )
}
