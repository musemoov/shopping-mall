'use client';

import { useState, FormEvent } from 'react';
import FormInput from '@/components/shared/FormInput';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Implement API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <FormInput
          id="name"
          label="이름"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          placeholder="홍길동"
          required
        />
        <FormInput
          id="email"
          type="email"
          label="이메일"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          placeholder="example@qbiemall.com"
          required
        />
      </div>
      <FormInput
        id="subject"
        label="제목"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        error={errors.subject}
        placeholder="문의 제목을 입력해주세요"
      />
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          메시지<span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-[#FF4500]'
          } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="문의 내용을 상세히 적어주세요..."
          required
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`group w-full bg-gradient-to-r from-[#FF4500] to-orange-600 text-white py-3 px-6 rounded-lg font-medium
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-orange-600 hover:to-orange-700'}
            transition-all shadow-md hover:shadow-lg flex items-center justify-center`}
        >
          <span>{isSubmitting ? '전송 중...' : '메시지 보내기'}</span>
          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mt-6 flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">
              메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.
            </p>
          </div>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mt-6 flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">
              메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.
            </p>
          </div>
        </div>
      )}
    </form>
  );
} 