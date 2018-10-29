const FORM_NAMES = {
  LOGIN: {
    name: 'loginForm',
    fields: {
      email: {
        name: 'email',
        id: 'login-email',
        label: 'Email'
      },
      password: {
        name: 'password',
        id: 'login-password',
        label: 'Password'
      }
    },
    btnTitles: {
      login: 'Login',
      register: 'Create an account'
    },
    btnTooltips: {
      login: 'Click to login',
      register: 'Click to go to create account page'
    }
  },
  EDIT_PROFILE: {
    name: 'editProfileForm',
    fields: {
      firstName: {
        name: 'firstName',
        id: 'edit-profile-firstName',
        label: 'First name'
      },
      lastName: {
        name: 'lastName',
        id: 'edit-profile-lastName',
        label: 'Last name'
      },
      age: {
        name: 'age',
        id: 'edit-profile-age',
        label: 'Age'
      },
      aboutMe: {
        name: 'aboutMe',
        id: 'edit-profile-aboutMe',
        label: 'About me'
      },
      profilePicture: {
        name: 'profilePicture',
        id: 'edit-profile-profilePicture',
        label: 'Profile Picture URL'
      },
      backgroundPicture: {
        name: 'backgroundPicture',
        id: 'edit-profile-backgroundPicture',
        label: 'Background Picture URL'
      }
    },
    btnTitles: {
      save: 'Save profile',
      cancel: 'Close',
      loading: 'Loading'
    },
    btnTooltips: {
      save: 'Click to save your profile',
      cancel: 'Click to cancel your profile edit',
      action: 'Click to edit your profile information'
    },
    messages: {
      success: 'Profile edited correctly!'
    }
  },
  PLACEHOLDERS: {
    URL: 'https://wolox.co',
    PASSWORD: '********',
    NAME: 'Your name',
    EMAIL: 'example@example.com',
    LASTNAME: 'Your last name',
    AGE: '18',
    ABOUT: 'Something about you :)'
  }
};

export default FORM_NAMES;
