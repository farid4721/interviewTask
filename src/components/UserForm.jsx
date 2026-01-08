'use client';

export default function UserForm({ formik, loading }) {

  const renderInput = (name, placeholder, mb = 'mb-2') => {
    const hasError = formik.touched[name] && formik.errors[name];
    const isPhone = name === 'phone';

    return (
      <div className={`w-full sm:w-3/4 mx-auto ${mb} text-left`}>
        <input
          name={name}
          placeholder={placeholder}
          inputMode={isPhone ? 'numeric' : undefined}
          maxLength={isPhone ? 10 : undefined}
          onChange={(e) => {
            if (isPhone) {
              const value = e.target.value.replace(/\D/g, '');
              formik.setFieldValue(name, value);
            } else {
              formik.handleChange(e);
            }
          }}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={`w-full px-3 py-2 rounded-md border text-sm sm:text-base
            ${hasError ? 'border-red-500' : 'border-black'}
          `}
        />

        <div className="h-4">
          {hasError && (
            <span className="text-red-500 text-xs">
              {formik.errors[name]}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-[500px] border border-black p-5 sm:p-6 text-center rounded-xl mx-4 sm:mx-0"

    >
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        User Registration
      </h1>

      {renderInput('name', 'Enter Name')}
      {renderInput('city', 'Enter City')}
      {renderInput('phone', 'Enter Phone number')}
      {renderInput('email', 'Enter Email id', 'mb-4')}

      <button
        type="submit"
        disabled={loading || !formik.isValid}
        className={`border px-6 py-2 rounded-xl flex items-center justify-center gap-2 mx-auto text-sm sm:text-base
          ${loading
            ? 'border-gray-400 text-gray-400 cursor-not-allowed'
            : 'border-black'
          }
        `}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
            Saving...
          </>
        ) : (
          'Save'
        )}
      </button>
    </form>
  );
}
