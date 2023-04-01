export const articleNew = ()=>{
    return [
        {
            id: 1,
            title: "Java Course",
            description: "A course for java beginner",
            avatarURL: "https://joeschmoe.io/api/v1/random",
            coverImageURL: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            coverImageDescription: "Java course for beginner"
        },

        {
            id: 2,
            title: "Java Course",
            description: "A course for java beginner",
            avatarURL: "https://joeschmoe.io/api/v1/random",
            coverImageURL: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            coverImageDescription: "Java course for beginner"
        },

        {
            id: 3,
            title: "Java Course",
            description: "A course for java beginner",
            avatarURL: "https://joeschmoe.io/api/v1/random",
            coverImageURL: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            coverImageDescription: "Java course for beginner"
        },

        {
            id: 4,
            title: "Java Course",
            description: "A course for java beginner",
            avatarURL: "https://joeschmoe.io/api/v1/random",
            coverImageURL: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            coverImageDescription: "Java course for beginner"
        },

        {
            id: 5,
            title: "Java Course",
            description: "A course for java beginner",
            avatarURL: "https://joeschmoe.io/api/v1/random",
            coverImageURL: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            coverImageDescription: "Java course for beginner"
        },

        {
            id: 6,
            title: "Java Course",
            description: "A course for java beginner",
            avatarURL: "https://joeschmoe.io/api/v1/random",
            coverImageURL: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            coverImageDescription: "Java course for beginner"
        },

        {
            id: 7,
            title: "Java Course",
            description: "A course for java beginner",
            avatarURL: "https://joeschmoe.io/api/v1/random",
            coverImageURL: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            coverImageDescription: "Java course for beginner"
        },

        {
            id: 8,
            title: "Java Course",
            description: "A course for java beginner",
            avatarURL: "https://joeschmoe.io/api/v1/random",
            coverImageURL: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            coverImageDescription: "Java course for beginner"
        },
    ]
}

export const article = ()=>{
    return [
    {
        id: 1,
        title: 'Java Basic',
        tags: ['java','jvm','program'],
        content: 
        "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. "
        +"The java standard library provides numbers of prepared function to us, and we can use them directly."
        +"Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management). So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    },
    {
        id: 2,
        title: 'Charpter 1',
        tags: ['java','jvm','program'],
        content: "They are all sub interfaces of Collection. The Collection interface extends Iterable interface. The List has order and can use both iterator and index to obtain element. But the Set can only obtain the element by iterator."
    },
    {
        id: 3,
        title: 'Charpter 2',
        tags: ['java','jvm','program'],
        content: "Besides, we also need to know the difference between ArrayList and LinkedList. The ArrayList is a dynamic array which allows the user to insert any number of elements without pre-claim the size of it. But it will allocate a size internally when you create it, and when the elements reach the maximum size of the list, it will expand the capacity. Also, the remove and insert operation of ArrayList is high time-consuming (O(n^2)) because it’s likely to change the position of other elements."
    },
    {
        id: 4,
        title: 'Charpter 3',
        tags: ['java','jvm','program'],
        content: "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    },
    {
        id: 5,
        title: 'Charpter 4',
        tags: ['java','jvm','program'],
        content: "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    },
    {
        id: 6,
        title: 'Java Basic',
        tags: ['java','jvm','program'],
        content: "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    },
    {
        id: 7,
        title: 'Java Basic',
        tags: ['java','jvm','program'],
        content: "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    },
    {
        id: 8,
        title: 'Java Basic',
        tags: ['java','jvm','program'],
        content:         "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    },
    {
        id: 9,
        title: 'Java Basic',
        tags: ['java','jvm','program'],
        content: "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    },
    {
        id: 10,
        title: 'Java Basic',
        tags: ['java','jvm','program'],
        content: "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    },
    {
        id: 11,
        title: 'Java Basic',
        tags: ['java','jvm','program'],
        content: "Cross Platform JVM is written in C language, and it can run on any platform, so the first advantage of java is cross-platform. No matter what OS you use(Windows, Linux, IOS), it can always output the same result, because the JVM give the java project a independent environment, no need to consider the influence from the operating system. Preparation, JDK, JRE The order of the processing in JVM. The java developers firstly need to download the JDK on the official website to provide the compiling tools and java runtime environment to the users. In the previous version, JDK has a copy of JRE. So, what is JDK? JDK is Java Development Kit, which helps us to compile the java code we write, debug the code and analyse the performance(memory allocation, thread management).  So, commonly we can see the javac.exe in the direction and java.exe. javac.exe is to help us compile java source file into class file, because the JVM can only read class files. The java.exe can then execute the class file. What is JRE? JRE has two parts, one is JVM the other is Java Standard library. The java standard library provides numbers of prepared function to us, and we can use them directly."
    }
]}