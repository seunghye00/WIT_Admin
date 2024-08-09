import { create } from 'zustand'

export const useAuthStore = create(set => ({
    loginID: '', // 세션을 상태변수로 만들고, 처음엔 빈 문자열로 셋팅
    myPage: { id: '', pw: '', name: '' },
    // 즉 처음엔 로그인ID가 없다는 뜻 = 세션이 없다는 뜻
    setLoginID: param => set({ loginID: param }),
    // setLoginID라는 함수를 만들고, 사용자가 로그인 하면 이 함수를 써서 loginID를 업데이트한다
    setMyPage: myPage => set({ myPage }),
    // setUserInfo라는 함수를 만들어서 myPage를 업데이트한다
    // 이걸 통해서 loginID 값을 변경 할 수 있다!
    // set을 통해서만 useAuthStore라는 상태변수를 변경이 가능하다
}))
