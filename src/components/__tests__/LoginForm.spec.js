import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
    test('컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야 한다.', () => {
        const wrapper = shallowMount(LoginForm);
        expect(wrapper.vm.username).toBe('');
    });
});

describe('LoginForm.vue', () => {
    test('컴포넌트가 마운팅되면 password가 존재하고 초기값으로 설정되어 있어야 한다.', () => {
        const wrapper = shallowMount(LoginForm);
        expect(wrapper.vm.password).toBe('');
    });
});

describe('LoginForm.vue', () => {
    test('ID는 이메일 형식이어야 한다.', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'test',
                };
            },
        });
        const warningText = wrapper.find('.warning');
        expect(warningText.exists()).toBeTruthy();
    });

    test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: '',
                    password: '',
                };
            },
        });
        const button = wrapper.find('button');
        expect(button.element.disabled).toBeTruthy();
    });

    test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'a@a.com',
                    password: '1234',
                };
            },
        });
        const button = wrapper.find('button');
        expect(button.element.disabled).toBeTruthy(); // 테스트 실패!
    });
});
