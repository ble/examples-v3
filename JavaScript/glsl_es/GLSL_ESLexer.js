// $ANTLR 3.3 Nov 30, 2010 12:50:56 GLSL_ES.g 2012-04-25 08:36:47

var GLSL_ESLexer = function(input, state) {
// alternate constructor @todo
// public GLSL_ESLexer(CharStream input)
// public GLSL_ESLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa17 = new GLSL_ESLexer.DFA17(this);
    GLSL_ESLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(GLSL_ESLexer, {
    EOF: -1,
    IDENTIFIER: 4,
    INTCONSTANT: 5,
    FLOATCONSTANT: 6,
    BOOLCONSTANT: 7,
    LEFT_PAREN: 8,
    RIGHT_PAREN: 9,
    LEFT_BRACKET: 10,
    RIGHT_BRACKET: 11,
    DOT: 12,
    INC_OP: 13,
    DEC_OP: 14,
    VOID: 15,
    COMMA: 16,
    FLOAT: 17,
    INT: 18,
    BOOL: 19,
    VEC2: 20,
    VEC3: 21,
    VEC4: 22,
    BVEC2: 23,
    BVEC3: 24,
    BVEC4: 25,
    IVEC2: 26,
    IVEC3: 27,
    IVEC4: 28,
    MAT2: 29,
    MAT3: 30,
    MAT4: 31,
    PLUS: 32,
    DASH: 33,
    BANG: 34,
    STAR: 35,
    SLASH: 36,
    LEFT_ANGLE: 37,
    RIGHT_ANGLE: 38,
    LE_OP: 39,
    GE_OP: 40,
    EQ_OP: 41,
    NE_OP: 42,
    AND_OP: 43,
    XOR_OP: 44,
    OR_OP: 45,
    QUESTION: 46,
    COLON: 47,
    EQUAL: 48,
    MUL_ASSIGN: 49,
    DIV_ASSIGN: 50,
    ADD_ASSIGN: 51,
    SUB_ASSIGN: 52,
    SEMICOLON: 53,
    PRECISION: 54,
    IN: 55,
    OUT: 56,
    INOUT: 57,
    INVARIANT: 58,
    CONST: 59,
    ATTRIBUTE: 60,
    VARYING: 61,
    UNIFORM: 62,
    SAMPLER2D: 63,
    SAMPLERCUBE: 64,
    HIGH_PRECISION: 65,
    MEDIUM_PRECISION: 66,
    LOW_PRECISION: 67,
    STRUCT: 68,
    LEFT_BRACE: 69,
    RIGHT_BRACE: 70,
    IF: 71,
    ELSE: 72,
    WHILE: 73,
    DO: 74,
    FOR: 75,
    CONTINUE: 76,
    BREAK: 77,
    RETURN: 78,
    DISCARD: 79,
    FALSE: 80,
    TRUE: 81,
    EXPONENT_PART: 82,
    DECIMAL_CONSTANT: 83,
    OCTAL_CONSTANT: 84,
    HEXDIGIT: 85,
    HEXADECIMAL_CONSTANT: 86,
    MOD_ASSIGN: 87,
    TILDE: 88,
    PERCENT: 89,
    VERTICAL_BAR: 90,
    CARET: 91,
    AMPERSAND: 92,
    WHITESPACE: 93,
    COMMENT: 94,
    MULTILINE_COMMENT: 95
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(GLSL_ESLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    IDENTIFIER : 4,
    INTCONSTANT : 5,
    FLOATCONSTANT : 6,
    BOOLCONSTANT : 7,
    LEFT_PAREN : 8,
    RIGHT_PAREN : 9,
    LEFT_BRACKET : 10,
    RIGHT_BRACKET : 11,
    DOT : 12,
    INC_OP : 13,
    DEC_OP : 14,
    VOID : 15,
    COMMA : 16,
    FLOAT : 17,
    INT : 18,
    BOOL : 19,
    VEC2 : 20,
    VEC3 : 21,
    VEC4 : 22,
    BVEC2 : 23,
    BVEC3 : 24,
    BVEC4 : 25,
    IVEC2 : 26,
    IVEC3 : 27,
    IVEC4 : 28,
    MAT2 : 29,
    MAT3 : 30,
    MAT4 : 31,
    PLUS : 32,
    DASH : 33,
    BANG : 34,
    STAR : 35,
    SLASH : 36,
    LEFT_ANGLE : 37,
    RIGHT_ANGLE : 38,
    LE_OP : 39,
    GE_OP : 40,
    EQ_OP : 41,
    NE_OP : 42,
    AND_OP : 43,
    XOR_OP : 44,
    OR_OP : 45,
    QUESTION : 46,
    COLON : 47,
    EQUAL : 48,
    MUL_ASSIGN : 49,
    DIV_ASSIGN : 50,
    ADD_ASSIGN : 51,
    SUB_ASSIGN : 52,
    SEMICOLON : 53,
    PRECISION : 54,
    IN : 55,
    OUT : 56,
    INOUT : 57,
    INVARIANT : 58,
    CONST : 59,
    ATTRIBUTE : 60,
    VARYING : 61,
    UNIFORM : 62,
    SAMPLER2D : 63,
    SAMPLERCUBE : 64,
    HIGH_PRECISION : 65,
    MEDIUM_PRECISION : 66,
    LOW_PRECISION : 67,
    STRUCT : 68,
    LEFT_BRACE : 69,
    RIGHT_BRACE : 70,
    IF : 71,
    ELSE : 72,
    WHILE : 73,
    DO : 74,
    FOR : 75,
    CONTINUE : 76,
    BREAK : 77,
    RETURN : 78,
    DISCARD : 79,
    FALSE : 80,
    TRUE : 81,
    EXPONENT_PART : 82,
    DECIMAL_CONSTANT : 83,
    OCTAL_CONSTANT : 84,
    HEXDIGIT : 85,
    HEXADECIMAL_CONSTANT : 86,
    MOD_ASSIGN : 87,
    TILDE : 88,
    PERCENT : 89,
    VERTICAL_BAR : 90,
    CARET : 91,
    AMPERSAND : 92,
    WHITESPACE : 93,
    COMMENT : 94,
    MULTILINE_COMMENT : 95,
    getGrammarFileName: function() { return "GLSL_ES.g"; }
});
org.antlr.lang.augmentObject(GLSL_ESLexer.prototype, {
    // $ANTLR start ATTRIBUTE
    mATTRIBUTE: function()  {
        try {
            var _type = this.ATTRIBUTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:447:18: ( 'attribute' )
            // GLSL_ES.g:447:20: 'attribute'
            this.match("attribute"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ATTRIBUTE",

    // $ANTLR start BOOL
    mBOOL: function()  {
        try {
            var _type = this.BOOL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:448:18: ( 'bool' )
            // GLSL_ES.g:448:20: 'bool'
            this.match("bool"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BOOL",

    // $ANTLR start BREAK
    mBREAK: function()  {
        try {
            var _type = this.BREAK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:449:18: ( 'break' )
            // GLSL_ES.g:449:20: 'break'
            this.match("break"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BREAK",

    // $ANTLR start BVEC2
    mBVEC2: function()  {
        try {
            var _type = this.BVEC2;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:450:18: ( 'bvec2' )
            // GLSL_ES.g:450:20: 'bvec2'
            this.match("bvec2"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BVEC2",

    // $ANTLR start BVEC3
    mBVEC3: function()  {
        try {
            var _type = this.BVEC3;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:451:18: ( 'bvec3' )
            // GLSL_ES.g:451:20: 'bvec3'
            this.match("bvec3"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BVEC3",

    // $ANTLR start BVEC4
    mBVEC4: function()  {
        try {
            var _type = this.BVEC4;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:452:18: ( 'bvec4' )
            // GLSL_ES.g:452:20: 'bvec4'
            this.match("bvec4"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BVEC4",

    // $ANTLR start CONST
    mCONST: function()  {
        try {
            var _type = this.CONST;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:453:18: ( 'const' )
            // GLSL_ES.g:453:20: 'const'
            this.match("const"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONST",

    // $ANTLR start CONTINUE
    mCONTINUE: function()  {
        try {
            var _type = this.CONTINUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:454:18: ( 'continue' )
            // GLSL_ES.g:454:20: 'continue'
            this.match("continue"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONTINUE",

    // $ANTLR start DISCARD
    mDISCARD: function()  {
        try {
            var _type = this.DISCARD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:455:18: ( 'discard' )
            // GLSL_ES.g:455:20: 'discard'
            this.match("discard"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DISCARD",

    // $ANTLR start DO
    mDO: function()  {
        try {
            var _type = this.DO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:456:18: ( 'do' )
            // GLSL_ES.g:456:20: 'do'
            this.match("do"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DO",

    // $ANTLR start ELSE
    mELSE: function()  {
        try {
            var _type = this.ELSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:457:18: ( 'else' )
            // GLSL_ES.g:457:20: 'else'
            this.match("else"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ELSE",

    // $ANTLR start FALSE
    mFALSE: function()  {
        try {
            var _type = this.FALSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:458:18: ( 'false' )
            // GLSL_ES.g:458:20: 'false'
            this.match("false"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FALSE",

    // $ANTLR start FLOAT
    mFLOAT: function()  {
        try {
            var _type = this.FLOAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:459:18: ( 'float' )
            // GLSL_ES.g:459:20: 'float'
            this.match("float"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOAT",

    // $ANTLR start FOR
    mFOR: function()  {
        try {
            var _type = this.FOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:460:18: ( 'for' )
            // GLSL_ES.g:460:20: 'for'
            this.match("for"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FOR",

    // $ANTLR start HIGH_PRECISION
    mHIGH_PRECISION: function()  {
        try {
            var _type = this.HIGH_PRECISION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:461:18: ( 'highp' )
            // GLSL_ES.g:461:20: 'highp'
            this.match("highp"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "HIGH_PRECISION",

    // $ANTLR start IF
    mIF: function()  {
        try {
            var _type = this.IF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:462:18: ( 'if' )
            // GLSL_ES.g:462:20: 'if'
            this.match("if"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IF",

    // $ANTLR start IN
    mIN: function()  {
        try {
            var _type = this.IN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:463:18: ( 'in' )
            // GLSL_ES.g:463:20: 'in'
            this.match("in"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IN",

    // $ANTLR start INOUT
    mINOUT: function()  {
        try {
            var _type = this.INOUT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:464:18: ( 'inout' )
            // GLSL_ES.g:464:20: 'inout'
            this.match("inout"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INOUT",

    // $ANTLR start INT
    mINT: function()  {
        try {
            var _type = this.INT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:465:18: ( 'int' )
            // GLSL_ES.g:465:20: 'int'
            this.match("int"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INT",

    // $ANTLR start INVARIANT
    mINVARIANT: function()  {
        try {
            var _type = this.INVARIANT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:466:18: ( 'invariant' )
            // GLSL_ES.g:466:20: 'invariant'
            this.match("invariant"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INVARIANT",

    // $ANTLR start IVEC2
    mIVEC2: function()  {
        try {
            var _type = this.IVEC2;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:467:18: ( 'ivec2' )
            // GLSL_ES.g:467:20: 'ivec2'
            this.match("ivec2"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IVEC2",

    // $ANTLR start IVEC3
    mIVEC3: function()  {
        try {
            var _type = this.IVEC3;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:468:18: ( 'ivec3' )
            // GLSL_ES.g:468:20: 'ivec3'
            this.match("ivec3"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IVEC3",

    // $ANTLR start IVEC4
    mIVEC4: function()  {
        try {
            var _type = this.IVEC4;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:469:18: ( 'ivec4' )
            // GLSL_ES.g:469:20: 'ivec4'
            this.match("ivec4"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IVEC4",

    // $ANTLR start LOW_PRECISION
    mLOW_PRECISION: function()  {
        try {
            var _type = this.LOW_PRECISION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:470:18: ( 'lowp' )
            // GLSL_ES.g:470:20: 'lowp'
            this.match("lowp"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LOW_PRECISION",

    // $ANTLR start MAT2
    mMAT2: function()  {
        try {
            var _type = this.MAT2;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:471:18: ( 'mat2' )
            // GLSL_ES.g:471:20: 'mat2'
            this.match("mat2"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MAT2",

    // $ANTLR start MAT3
    mMAT3: function()  {
        try {
            var _type = this.MAT3;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:472:18: ( 'mat3' )
            // GLSL_ES.g:472:20: 'mat3'
            this.match("mat3"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MAT3",

    // $ANTLR start MAT4
    mMAT4: function()  {
        try {
            var _type = this.MAT4;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:473:18: ( 'mat4' )
            // GLSL_ES.g:473:20: 'mat4'
            this.match("mat4"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MAT4",

    // $ANTLR start MEDIUM_PRECISION
    mMEDIUM_PRECISION: function()  {
        try {
            var _type = this.MEDIUM_PRECISION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:474:18: ( 'mediump' )
            // GLSL_ES.g:474:20: 'mediump'
            this.match("mediump"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MEDIUM_PRECISION",

    // $ANTLR start OUT
    mOUT: function()  {
        try {
            var _type = this.OUT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:475:18: ( 'out' )
            // GLSL_ES.g:475:20: 'out'
            this.match("out"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OUT",

    // $ANTLR start PRECISION
    mPRECISION: function()  {
        try {
            var _type = this.PRECISION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:476:18: ( 'precision' )
            // GLSL_ES.g:476:20: 'precision'
            this.match("precision"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PRECISION",

    // $ANTLR start RETURN
    mRETURN: function()  {
        try {
            var _type = this.RETURN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:477:18: ( 'return' )
            // GLSL_ES.g:477:20: 'return'
            this.match("return"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RETURN",

    // $ANTLR start SAMPLER2D
    mSAMPLER2D: function()  {
        try {
            var _type = this.SAMPLER2D;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:478:18: ( 'sampler2D' )
            // GLSL_ES.g:478:20: 'sampler2D'
            this.match("sampler2D"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SAMPLER2D",

    // $ANTLR start SAMPLERCUBE
    mSAMPLERCUBE: function()  {
        try {
            var _type = this.SAMPLERCUBE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:479:18: ( 'samplerCube' )
            // GLSL_ES.g:479:20: 'samplerCube'
            this.match("samplerCube"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SAMPLERCUBE",

    // $ANTLR start STRUCT
    mSTRUCT: function()  {
        try {
            var _type = this.STRUCT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:480:18: ( 'struct' )
            // GLSL_ES.g:480:20: 'struct'
            this.match("struct"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRUCT",

    // $ANTLR start TRUE
    mTRUE: function()  {
        try {
            var _type = this.TRUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:481:18: ( 'true' )
            // GLSL_ES.g:481:20: 'true'
            this.match("true"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TRUE",

    // $ANTLR start UNIFORM
    mUNIFORM: function()  {
        try {
            var _type = this.UNIFORM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:482:18: ( 'uniform' )
            // GLSL_ES.g:482:20: 'uniform'
            this.match("uniform"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "UNIFORM",

    // $ANTLR start VARYING
    mVARYING: function()  {
        try {
            var _type = this.VARYING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:483:18: ( 'varying' )
            // GLSL_ES.g:483:20: 'varying'
            this.match("varying"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VARYING",

    // $ANTLR start VEC2
    mVEC2: function()  {
        try {
            var _type = this.VEC2;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:484:18: ( 'vec2' )
            // GLSL_ES.g:484:20: 'vec2'
            this.match("vec2"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VEC2",

    // $ANTLR start VEC3
    mVEC3: function()  {
        try {
            var _type = this.VEC3;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:485:18: ( 'vec3' )
            // GLSL_ES.g:485:20: 'vec3'
            this.match("vec3"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VEC3",

    // $ANTLR start VEC4
    mVEC4: function()  {
        try {
            var _type = this.VEC4;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:486:18: ( 'vec4' )
            // GLSL_ES.g:486:20: 'vec4'
            this.match("vec4"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VEC4",

    // $ANTLR start VOID
    mVOID: function()  {
        try {
            var _type = this.VOID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:487:18: ( 'void' )
            // GLSL_ES.g:487:20: 'void'
            this.match("void"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VOID",

    // $ANTLR start WHILE
    mWHILE: function()  {
        try {
            var _type = this.WHILE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:488:18: ( 'while' )
            // GLSL_ES.g:488:20: 'while'
            this.match("while"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHILE",

    // $ANTLR start IDENTIFIER
    mIDENTIFIER: function()  {
        try {
            var _type = this.IDENTIFIER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:491:3: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )* )
            // GLSL_ES.g:491:5: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // GLSL_ES.g:491:28: ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // GLSL_ES.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop1;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IDENTIFIER",

    // $ANTLR start EXPONENT_PART
    mEXPONENT_PART: function()  {
        try {
            // GLSL_ES.g:505:24: ( ( 'e' | 'E' ) ( PLUS | DASH )? ( '0' .. '9' )+ )
            // GLSL_ES.g:505:26: ( 'e' | 'E' ) ( PLUS | DASH )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // GLSL_ES.g:505:36: ( PLUS | DASH )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0=='+'||LA2_0=='-') ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // GLSL_ES.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // GLSL_ES.g:505:51: ( '0' .. '9' )+
            var cnt3=0;
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // GLSL_ES.g:505:52: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt3 >= 1 ) {
                        break loop3;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(3, this.input);
                        throw eee;
                }
                cnt3++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "EXPONENT_PART",

    // $ANTLR start FLOATCONSTANT
    mFLOATCONSTANT: function()  {
        try {
            var _type = this.FLOATCONSTANT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:508:3: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT_PART )? | '.' ( '0' .. '9' )+ ( EXPONENT_PART )? )
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( ((LA9_0>='0' && LA9_0<='9')) ) {
                alt9=1;
            }
            else if ( (LA9_0=='.') ) {
                alt9=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 9, 0, this.input);

                throw nvae;
            }
            switch (alt9) {
                case 1 :
                    // GLSL_ES.g:508:5: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT_PART )?
                    // GLSL_ES.g:508:5: ( '0' .. '9' )+
                    var cnt4=0;
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( ((LA4_0>='0' && LA4_0<='9')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // GLSL_ES.g:508:6: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt4 >= 1 ) {
                                break loop4;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(4, this.input);
                                throw eee;
                        }
                        cnt4++;
                    } while (true);

                    this.match('.'); 
                    // GLSL_ES.g:508:21: ( '0' .. '9' )*
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( ((LA5_0>='0' && LA5_0<='9')) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // GLSL_ES.g:508:22: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop5;
                        }
                    } while (true);

                    // GLSL_ES.g:508:33: ( EXPONENT_PART )?
                    var alt6=2;
                    var LA6_0 = this.input.LA(1);

                    if ( (LA6_0=='E'||LA6_0=='e') ) {
                        alt6=1;
                    }
                    switch (alt6) {
                        case 1 :
                            // GLSL_ES.g:508:34: EXPONENT_PART
                            this.mEXPONENT_PART(); 


                            break;

                    }



                    break;
                case 2 :
                    // GLSL_ES.g:509:5: '.' ( '0' .. '9' )+ ( EXPONENT_PART )?
                    this.match('.'); 
                    // GLSL_ES.g:509:9: ( '0' .. '9' )+
                    var cnt7=0;
                    loop7:
                    do {
                        var alt7=2;
                        var LA7_0 = this.input.LA(1);

                        if ( ((LA7_0>='0' && LA7_0<='9')) ) {
                            alt7=1;
                        }


                        switch (alt7) {
                        case 1 :
                            // GLSL_ES.g:509:10: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt7 >= 1 ) {
                                break loop7;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(7, this.input);
                                throw eee;
                        }
                        cnt7++;
                    } while (true);

                    // GLSL_ES.g:509:21: ( EXPONENT_PART )?
                    var alt8=2;
                    var LA8_0 = this.input.LA(1);

                    if ( (LA8_0=='E'||LA8_0=='e') ) {
                        alt8=1;
                    }
                    switch (alt8) {
                        case 1 :
                            // GLSL_ES.g:509:22: EXPONENT_PART
                            this.mEXPONENT_PART(); 


                            break;

                    }



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOATCONSTANT",

    // $ANTLR start DECIMAL_CONSTANT
    mDECIMAL_CONSTANT: function()  {
        try {
            // GLSL_ES.g:513:3: ( ( '1' .. '9' ) ( '0' .. '9' )* )
            // GLSL_ES.g:513:5: ( '1' .. '9' ) ( '0' .. '9' )*
            // GLSL_ES.g:513:5: ( '1' .. '9' )
            // GLSL_ES.g:513:6: '1' .. '9'
            this.matchRange('1','9'); 



            // GLSL_ES.g:513:15: ( '0' .. '9' )*
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( ((LA10_0>='0' && LA10_0<='9')) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // GLSL_ES.g:513:16: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    break loop10;
                }
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "DECIMAL_CONSTANT",

    // $ANTLR start OCTAL_CONSTANT
    mOCTAL_CONSTANT: function()  {
        try {
            // GLSL_ES.g:517:3: ( '0' ( '0' .. '7' )* )
            // GLSL_ES.g:517:5: '0' ( '0' .. '7' )*
            this.match('0'); 
            // GLSL_ES.g:517:9: ( '0' .. '7' )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( ((LA11_0>='0' && LA11_0<='7')) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // GLSL_ES.g:517:10: '0' .. '7'
                    this.matchRange('0','7'); 


                    break;

                default :
                    break loop11;
                }
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "OCTAL_CONSTANT",

    // $ANTLR start HEXADECIMAL_CONSTANT
    mHEXADECIMAL_CONSTANT: function()  {
        try {
            // GLSL_ES.g:521:3: ( '0' ( 'x' | 'X' ) ( HEXDIGIT )+ )
            // GLSL_ES.g:521:5: '0' ( 'x' | 'X' ) ( HEXDIGIT )+
            this.match('0'); 
            if ( this.input.LA(1)=='X'||this.input.LA(1)=='x' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // GLSL_ES.g:521:19: ( HEXDIGIT )+
            var cnt12=0;
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( ((LA12_0>='0' && LA12_0<='9')||(LA12_0>='A' && LA12_0<='F')||(LA12_0>='a' && LA12_0<='f')) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // GLSL_ES.g:521:19: HEXDIGIT
                    this.mHEXDIGIT(); 


                    break;

                default :
                    if ( cnt12 >= 1 ) {
                        break loop12;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(12, this.input);
                        throw eee;
                }
                cnt12++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "HEXADECIMAL_CONSTANT",

    // $ANTLR start HEXDIGIT
    mHEXDIGIT: function()  {
        try {
            // GLSL_ES.g:525:3: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // GLSL_ES.g:525:5: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HEXDIGIT",

    // $ANTLR start INTCONSTANT
    mINTCONSTANT: function()  {
        try {
            var _type = this.INTCONSTANT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:529:3: ( DECIMAL_CONSTANT | OCTAL_CONSTANT | HEXADECIMAL_CONSTANT )
            var alt13=3;
            var LA13_0 = this.input.LA(1);

            if ( ((LA13_0>='1' && LA13_0<='9')) ) {
                alt13=1;
            }
            else if ( (LA13_0=='0') ) {
                var LA13_2 = this.input.LA(2);

                if ( (LA13_2=='X'||LA13_2=='x') ) {
                    alt13=3;
                }
                else {
                    alt13=2;}
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 13, 0, this.input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // GLSL_ES.g:529:5: DECIMAL_CONSTANT
                    this.mDECIMAL_CONSTANT(); 


                    break;
                case 2 :
                    // GLSL_ES.g:530:5: OCTAL_CONSTANT
                    this.mOCTAL_CONSTANT(); 


                    break;
                case 3 :
                    // GLSL_ES.g:531:5: HEXADECIMAL_CONSTANT
                    this.mHEXADECIMAL_CONSTANT(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INTCONSTANT",

    // $ANTLR start BOOLCONSTANT
    mBOOLCONSTANT: function()  {
        try {
            // GLSL_ES.g:535:3: ( TRUE | FALSE )
            var alt14=2;
            var LA14_0 = this.input.LA(1);

            if ( (LA14_0=='t') ) {
                alt14=1;
            }
            else if ( (LA14_0=='f') ) {
                alt14=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 14, 0, this.input);

                throw nvae;
            }
            switch (alt14) {
                case 1 :
                    // GLSL_ES.g:535:5: TRUE
                    this.mTRUE(); 


                    break;
                case 2 :
                    // GLSL_ES.g:536:5: FALSE
                    this.mFALSE(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "BOOLCONSTANT",

    // $ANTLR start INC_OP
    mINC_OP: function()  {
        try {
            var _type = this.INC_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:547:18: ( '++' )
            // GLSL_ES.g:547:20: '++'
            this.match("++"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INC_OP",

    // $ANTLR start DEC_OP
    mDEC_OP: function()  {
        try {
            var _type = this.DEC_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:548:18: ( '--' )
            // GLSL_ES.g:548:20: '--'
            this.match("--"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DEC_OP",

    // $ANTLR start LE_OP
    mLE_OP: function()  {
        try {
            var _type = this.LE_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:549:18: ( '<=' )
            // GLSL_ES.g:549:20: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LE_OP",

    // $ANTLR start GE_OP
    mGE_OP: function()  {
        try {
            var _type = this.GE_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:550:18: ( '>=' )
            // GLSL_ES.g:550:20: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GE_OP",

    // $ANTLR start EQ_OP
    mEQ_OP: function()  {
        try {
            var _type = this.EQ_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:551:18: ( '==' )
            // GLSL_ES.g:551:20: '=='
            this.match("=="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EQ_OP",

    // $ANTLR start NE_OP
    mNE_OP: function()  {
        try {
            var _type = this.NE_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:552:18: ( '!=' )
            // GLSL_ES.g:552:20: '!='
            this.match("!="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NE_OP",

    // $ANTLR start AND_OP
    mAND_OP: function()  {
        try {
            var _type = this.AND_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:554:18: ( '&&' )
            // GLSL_ES.g:554:20: '&&'
            this.match("&&"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AND_OP",

    // $ANTLR start OR_OP
    mOR_OP: function()  {
        try {
            var _type = this.OR_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:555:18: ( '||' )
            // GLSL_ES.g:555:20: '||'
            this.match("||"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OR_OP",

    // $ANTLR start XOR_OP
    mXOR_OP: function()  {
        try {
            var _type = this.XOR_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:556:18: ( '^^' )
            // GLSL_ES.g:556:20: '^^'
            this.match("^^"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "XOR_OP",

    // $ANTLR start MUL_ASSIGN
    mMUL_ASSIGN: function()  {
        try {
            var _type = this.MUL_ASSIGN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:557:18: ( '*=' )
            // GLSL_ES.g:557:20: '*='
            this.match("*="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MUL_ASSIGN",

    // $ANTLR start DIV_ASSIGN
    mDIV_ASSIGN: function()  {
        try {
            var _type = this.DIV_ASSIGN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:558:18: ( '/=' )
            // GLSL_ES.g:558:20: '/='
            this.match("/="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DIV_ASSIGN",

    // $ANTLR start ADD_ASSIGN
    mADD_ASSIGN: function()  {
        try {
            var _type = this.ADD_ASSIGN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:559:18: ( '+=' )
            // GLSL_ES.g:559:20: '+='
            this.match("+="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ADD_ASSIGN",

    // $ANTLR start MOD_ASSIGN
    mMOD_ASSIGN: function()  {
        try {
            var _type = this.MOD_ASSIGN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:560:18: ( '%=' )
            // GLSL_ES.g:560:20: '%='
            this.match("%="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MOD_ASSIGN",

    // $ANTLR start SUB_ASSIGN
    mSUB_ASSIGN: function()  {
        try {
            var _type = this.SUB_ASSIGN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:566:18: ( '-=' )
            // GLSL_ES.g:566:20: '-='
            this.match("-="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SUB_ASSIGN",

    // $ANTLR start LEFT_PAREN
    mLEFT_PAREN: function()  {
        try {
            var _type = this.LEFT_PAREN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:568:18: ( '(' )
            // GLSL_ES.g:568:20: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LEFT_PAREN",

    // $ANTLR start RIGHT_PAREN
    mRIGHT_PAREN: function()  {
        try {
            var _type = this.RIGHT_PAREN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:569:18: ( ')' )
            // GLSL_ES.g:569:20: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RIGHT_PAREN",

    // $ANTLR start LEFT_BRACKET
    mLEFT_BRACKET: function()  {
        try {
            var _type = this.LEFT_BRACKET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:570:18: ( '[' )
            // GLSL_ES.g:570:20: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LEFT_BRACKET",

    // $ANTLR start RIGHT_BRACKET
    mRIGHT_BRACKET: function()  {
        try {
            var _type = this.RIGHT_BRACKET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:571:18: ( ']' )
            // GLSL_ES.g:571:20: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RIGHT_BRACKET",

    // $ANTLR start LEFT_BRACE
    mLEFT_BRACE: function()  {
        try {
            var _type = this.LEFT_BRACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:572:18: ( '{' )
            // GLSL_ES.g:572:20: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LEFT_BRACE",

    // $ANTLR start RIGHT_BRACE
    mRIGHT_BRACE: function()  {
        try {
            var _type = this.RIGHT_BRACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:573:18: ( '}' )
            // GLSL_ES.g:573:20: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RIGHT_BRACE",

    // $ANTLR start DOT
    mDOT: function()  {
        try {
            var _type = this.DOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:574:18: ( '.' )
            // GLSL_ES.g:574:20: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DOT",

    // $ANTLR start COMMA
    mCOMMA: function()  {
        try {
            var _type = this.COMMA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:576:18: ( ',' )
            // GLSL_ES.g:576:20: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMA",

    // $ANTLR start COLON
    mCOLON: function()  {
        try {
            var _type = this.COLON;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:577:18: ( ':' )
            // GLSL_ES.g:577:20: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COLON",

    // $ANTLR start EQUAL
    mEQUAL: function()  {
        try {
            var _type = this.EQUAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:578:18: ( '=' )
            // GLSL_ES.g:578:20: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EQUAL",

    // $ANTLR start SEMICOLON
    mSEMICOLON: function()  {
        try {
            var _type = this.SEMICOLON;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:579:18: ( ';' )
            // GLSL_ES.g:579:20: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SEMICOLON",

    // $ANTLR start BANG
    mBANG: function()  {
        try {
            var _type = this.BANG;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:580:18: ( '!' )
            // GLSL_ES.g:580:20: '!'
            this.match('!'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BANG",

    // $ANTLR start DASH
    mDASH: function()  {
        try {
            var _type = this.DASH;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:581:18: ( '-' )
            // GLSL_ES.g:581:20: '-'
            this.match('-'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DASH",

    // $ANTLR start TILDE
    mTILDE: function()  {
        try {
            var _type = this.TILDE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:582:18: ( '~' )
            // GLSL_ES.g:582:20: '~'
            this.match('~'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TILDE",

    // $ANTLR start PLUS
    mPLUS: function()  {
        try {
            var _type = this.PLUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:583:18: ( '+' )
            // GLSL_ES.g:583:20: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PLUS",

    // $ANTLR start STAR
    mSTAR: function()  {
        try {
            var _type = this.STAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:584:18: ( '*' )
            // GLSL_ES.g:584:20: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STAR",

    // $ANTLR start SLASH
    mSLASH: function()  {
        try {
            var _type = this.SLASH;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:585:18: ( '/' )
            // GLSL_ES.g:585:20: '/'
            this.match('/'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SLASH",

    // $ANTLR start PERCENT
    mPERCENT: function()  {
        try {
            var _type = this.PERCENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:586:18: ( '%' )
            // GLSL_ES.g:586:20: '%'
            this.match('%'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PERCENT",

    // $ANTLR start LEFT_ANGLE
    mLEFT_ANGLE: function()  {
        try {
            var _type = this.LEFT_ANGLE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:588:18: ( '<' )
            // GLSL_ES.g:588:20: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LEFT_ANGLE",

    // $ANTLR start RIGHT_ANGLE
    mRIGHT_ANGLE: function()  {
        try {
            var _type = this.RIGHT_ANGLE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:589:18: ( '>' )
            // GLSL_ES.g:589:20: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RIGHT_ANGLE",

    // $ANTLR start VERTICAL_BAR
    mVERTICAL_BAR: function()  {
        try {
            var _type = this.VERTICAL_BAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:590:18: ( '|' )
            // GLSL_ES.g:590:20: '|'
            this.match('|'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VERTICAL_BAR",

    // $ANTLR start CARET
    mCARET: function()  {
        try {
            var _type = this.CARET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:591:18: ( '^' )
            // GLSL_ES.g:591:20: '^'
            this.match('^'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CARET",

    // $ANTLR start AMPERSAND
    mAMPERSAND: function()  {
        try {
            var _type = this.AMPERSAND;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:592:18: ( '&' )
            // GLSL_ES.g:592:20: '&'
            this.match('&'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AMPERSAND",

    // $ANTLR start QUESTION
    mQUESTION: function()  {
        try {
            var _type = this.QUESTION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:593:18: ( '?' )
            // GLSL_ES.g:593:20: '?'
            this.match('?'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "QUESTION",

    // $ANTLR start WHITESPACE
    mWHITESPACE: function()  {
        try {
            var _type = this.WHITESPACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:599:3: ( ( ' ' | '\\t' | '\\f' | '\\r' | '\\n' ) )
            // GLSL_ES.g:599:5: ( ' ' | '\\t' | '\\f' | '\\r' | '\\n' )
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||(this.input.LA(1)>='\f' && this.input.LA(1)<='\r')||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

             _channel = HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHITESPACE",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:604:3: ( '//' (~ ( '\\n' | '\\r' ) )* )
            // GLSL_ES.g:604:5: '//' (~ ( '\\n' | '\\r' ) )*
            this.match("//"); 

            // GLSL_ES.g:604:10: (~ ( '\\n' | '\\r' ) )*
            loop15:
            do {
                var alt15=2;
                var LA15_0 = this.input.LA(1);

                if ( ((LA15_0>='\u0000' && LA15_0<='\t')||(LA15_0>='\u000B' && LA15_0<='\f')||(LA15_0>='\u000E' && LA15_0<='\uFFFF')) ) {
                    alt15=1;
                }


                switch (alt15) {
                case 1 :
                    // GLSL_ES.g:604:11: ~ ( '\\n' | '\\r' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop15;
                }
            } while (true);

             _channel = HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start MULTILINE_COMMENT
    mMULTILINE_COMMENT: function()  {
        try {
            var _type = this.MULTILINE_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // GLSL_ES.g:609:3: ( '/*' ( options {greedy=false; } : . )* '*/' )
            // GLSL_ES.g:609:5: '/*' ( options {greedy=false; } : . )* '*/'
            this.match("/*"); 

            // GLSL_ES.g:609:10: ( options {greedy=false; } : . )*
            loop16:
            do {
                var alt16=2;
                var LA16_0 = this.input.LA(1);

                if ( (LA16_0=='*') ) {
                    var LA16_1 = this.input.LA(2);

                    if ( (LA16_1=='/') ) {
                        alt16=2;
                    }
                    else if ( ((LA16_1>='\u0000' && LA16_1<='.')||(LA16_1>='0' && LA16_1<='\uFFFF')) ) {
                        alt16=1;
                    }


                }
                else if ( ((LA16_0>='\u0000' && LA16_0<=')')||(LA16_0>='+' && LA16_0<='\uFFFF')) ) {
                    alt16=1;
                }


                switch (alt16) {
                case 1 :
                    // GLSL_ES.g:609:38: .
                    this.matchAny(); 


                    break;

                default :
                    break loop16;
                }
            } while (true);

            this.match("*/"); 

             _channel = HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MULTILINE_COMMENT",

    mTokens: function() {
        // GLSL_ES.g:1:8: ( ATTRIBUTE | BOOL | BREAK | BVEC2 | BVEC3 | BVEC4 | CONST | CONTINUE | DISCARD | DO | ELSE | FALSE | FLOAT | FOR | HIGH_PRECISION | IF | IN | INOUT | INT | INVARIANT | IVEC2 | IVEC3 | IVEC4 | LOW_PRECISION | MAT2 | MAT3 | MAT4 | MEDIUM_PRECISION | OUT | PRECISION | RETURN | SAMPLER2D | SAMPLERCUBE | STRUCT | TRUE | UNIFORM | VARYING | VEC2 | VEC3 | VEC4 | VOID | WHILE | IDENTIFIER | FLOATCONSTANT | INTCONSTANT | INC_OP | DEC_OP | LE_OP | GE_OP | EQ_OP | NE_OP | AND_OP | OR_OP | XOR_OP | MUL_ASSIGN | DIV_ASSIGN | ADD_ASSIGN | MOD_ASSIGN | SUB_ASSIGN | LEFT_PAREN | RIGHT_PAREN | LEFT_BRACKET | RIGHT_BRACKET | LEFT_BRACE | RIGHT_BRACE | DOT | COMMA | COLON | EQUAL | SEMICOLON | BANG | DASH | TILDE | PLUS | STAR | SLASH | PERCENT | LEFT_ANGLE | RIGHT_ANGLE | VERTICAL_BAR | CARET | AMPERSAND | QUESTION | WHITESPACE | COMMENT | MULTILINE_COMMENT )
        var alt17=86;
        alt17 = this.dfa17.predict(this.input);
        switch (alt17) {
            case 1 :
                // GLSL_ES.g:1:10: ATTRIBUTE
                this.mATTRIBUTE(); 


                break;
            case 2 :
                // GLSL_ES.g:1:20: BOOL
                this.mBOOL(); 


                break;
            case 3 :
                // GLSL_ES.g:1:25: BREAK
                this.mBREAK(); 


                break;
            case 4 :
                // GLSL_ES.g:1:31: BVEC2
                this.mBVEC2(); 


                break;
            case 5 :
                // GLSL_ES.g:1:37: BVEC3
                this.mBVEC3(); 


                break;
            case 6 :
                // GLSL_ES.g:1:43: BVEC4
                this.mBVEC4(); 


                break;
            case 7 :
                // GLSL_ES.g:1:49: CONST
                this.mCONST(); 


                break;
            case 8 :
                // GLSL_ES.g:1:55: CONTINUE
                this.mCONTINUE(); 


                break;
            case 9 :
                // GLSL_ES.g:1:64: DISCARD
                this.mDISCARD(); 


                break;
            case 10 :
                // GLSL_ES.g:1:72: DO
                this.mDO(); 


                break;
            case 11 :
                // GLSL_ES.g:1:75: ELSE
                this.mELSE(); 


                break;
            case 12 :
                // GLSL_ES.g:1:80: FALSE
                this.mFALSE(); 


                break;
            case 13 :
                // GLSL_ES.g:1:86: FLOAT
                this.mFLOAT(); 


                break;
            case 14 :
                // GLSL_ES.g:1:92: FOR
                this.mFOR(); 


                break;
            case 15 :
                // GLSL_ES.g:1:96: HIGH_PRECISION
                this.mHIGH_PRECISION(); 


                break;
            case 16 :
                // GLSL_ES.g:1:111: IF
                this.mIF(); 


                break;
            case 17 :
                // GLSL_ES.g:1:114: IN
                this.mIN(); 


                break;
            case 18 :
                // GLSL_ES.g:1:117: INOUT
                this.mINOUT(); 


                break;
            case 19 :
                // GLSL_ES.g:1:123: INT
                this.mINT(); 


                break;
            case 20 :
                // GLSL_ES.g:1:127: INVARIANT
                this.mINVARIANT(); 


                break;
            case 21 :
                // GLSL_ES.g:1:137: IVEC2
                this.mIVEC2(); 


                break;
            case 22 :
                // GLSL_ES.g:1:143: IVEC3
                this.mIVEC3(); 


                break;
            case 23 :
                // GLSL_ES.g:1:149: IVEC4
                this.mIVEC4(); 


                break;
            case 24 :
                // GLSL_ES.g:1:155: LOW_PRECISION
                this.mLOW_PRECISION(); 


                break;
            case 25 :
                // GLSL_ES.g:1:169: MAT2
                this.mMAT2(); 


                break;
            case 26 :
                // GLSL_ES.g:1:174: MAT3
                this.mMAT3(); 


                break;
            case 27 :
                // GLSL_ES.g:1:179: MAT4
                this.mMAT4(); 


                break;
            case 28 :
                // GLSL_ES.g:1:184: MEDIUM_PRECISION
                this.mMEDIUM_PRECISION(); 


                break;
            case 29 :
                // GLSL_ES.g:1:201: OUT
                this.mOUT(); 


                break;
            case 30 :
                // GLSL_ES.g:1:205: PRECISION
                this.mPRECISION(); 


                break;
            case 31 :
                // GLSL_ES.g:1:215: RETURN
                this.mRETURN(); 


                break;
            case 32 :
                // GLSL_ES.g:1:222: SAMPLER2D
                this.mSAMPLER2D(); 


                break;
            case 33 :
                // GLSL_ES.g:1:232: SAMPLERCUBE
                this.mSAMPLERCUBE(); 


                break;
            case 34 :
                // GLSL_ES.g:1:244: STRUCT
                this.mSTRUCT(); 


                break;
            case 35 :
                // GLSL_ES.g:1:251: TRUE
                this.mTRUE(); 


                break;
            case 36 :
                // GLSL_ES.g:1:256: UNIFORM
                this.mUNIFORM(); 


                break;
            case 37 :
                // GLSL_ES.g:1:264: VARYING
                this.mVARYING(); 


                break;
            case 38 :
                // GLSL_ES.g:1:272: VEC2
                this.mVEC2(); 


                break;
            case 39 :
                // GLSL_ES.g:1:277: VEC3
                this.mVEC3(); 


                break;
            case 40 :
                // GLSL_ES.g:1:282: VEC4
                this.mVEC4(); 


                break;
            case 41 :
                // GLSL_ES.g:1:287: VOID
                this.mVOID(); 


                break;
            case 42 :
                // GLSL_ES.g:1:292: WHILE
                this.mWHILE(); 


                break;
            case 43 :
                // GLSL_ES.g:1:298: IDENTIFIER
                this.mIDENTIFIER(); 


                break;
            case 44 :
                // GLSL_ES.g:1:309: FLOATCONSTANT
                this.mFLOATCONSTANT(); 


                break;
            case 45 :
                // GLSL_ES.g:1:323: INTCONSTANT
                this.mINTCONSTANT(); 


                break;
            case 46 :
                // GLSL_ES.g:1:335: INC_OP
                this.mINC_OP(); 


                break;
            case 47 :
                // GLSL_ES.g:1:342: DEC_OP
                this.mDEC_OP(); 


                break;
            case 48 :
                // GLSL_ES.g:1:349: LE_OP
                this.mLE_OP(); 


                break;
            case 49 :
                // GLSL_ES.g:1:355: GE_OP
                this.mGE_OP(); 


                break;
            case 50 :
                // GLSL_ES.g:1:361: EQ_OP
                this.mEQ_OP(); 


                break;
            case 51 :
                // GLSL_ES.g:1:367: NE_OP
                this.mNE_OP(); 


                break;
            case 52 :
                // GLSL_ES.g:1:373: AND_OP
                this.mAND_OP(); 


                break;
            case 53 :
                // GLSL_ES.g:1:380: OR_OP
                this.mOR_OP(); 


                break;
            case 54 :
                // GLSL_ES.g:1:386: XOR_OP
                this.mXOR_OP(); 


                break;
            case 55 :
                // GLSL_ES.g:1:393: MUL_ASSIGN
                this.mMUL_ASSIGN(); 


                break;
            case 56 :
                // GLSL_ES.g:1:404: DIV_ASSIGN
                this.mDIV_ASSIGN(); 


                break;
            case 57 :
                // GLSL_ES.g:1:415: ADD_ASSIGN
                this.mADD_ASSIGN(); 


                break;
            case 58 :
                // GLSL_ES.g:1:426: MOD_ASSIGN
                this.mMOD_ASSIGN(); 


                break;
            case 59 :
                // GLSL_ES.g:1:437: SUB_ASSIGN
                this.mSUB_ASSIGN(); 


                break;
            case 60 :
                // GLSL_ES.g:1:448: LEFT_PAREN
                this.mLEFT_PAREN(); 


                break;
            case 61 :
                // GLSL_ES.g:1:459: RIGHT_PAREN
                this.mRIGHT_PAREN(); 


                break;
            case 62 :
                // GLSL_ES.g:1:471: LEFT_BRACKET
                this.mLEFT_BRACKET(); 


                break;
            case 63 :
                // GLSL_ES.g:1:484: RIGHT_BRACKET
                this.mRIGHT_BRACKET(); 


                break;
            case 64 :
                // GLSL_ES.g:1:498: LEFT_BRACE
                this.mLEFT_BRACE(); 


                break;
            case 65 :
                // GLSL_ES.g:1:509: RIGHT_BRACE
                this.mRIGHT_BRACE(); 


                break;
            case 66 :
                // GLSL_ES.g:1:521: DOT
                this.mDOT(); 


                break;
            case 67 :
                // GLSL_ES.g:1:525: COMMA
                this.mCOMMA(); 


                break;
            case 68 :
                // GLSL_ES.g:1:531: COLON
                this.mCOLON(); 


                break;
            case 69 :
                // GLSL_ES.g:1:537: EQUAL
                this.mEQUAL(); 


                break;
            case 70 :
                // GLSL_ES.g:1:543: SEMICOLON
                this.mSEMICOLON(); 


                break;
            case 71 :
                // GLSL_ES.g:1:553: BANG
                this.mBANG(); 


                break;
            case 72 :
                // GLSL_ES.g:1:558: DASH
                this.mDASH(); 


                break;
            case 73 :
                // GLSL_ES.g:1:563: TILDE
                this.mTILDE(); 


                break;
            case 74 :
                // GLSL_ES.g:1:569: PLUS
                this.mPLUS(); 


                break;
            case 75 :
                // GLSL_ES.g:1:574: STAR
                this.mSTAR(); 


                break;
            case 76 :
                // GLSL_ES.g:1:579: SLASH
                this.mSLASH(); 


                break;
            case 77 :
                // GLSL_ES.g:1:585: PERCENT
                this.mPERCENT(); 


                break;
            case 78 :
                // GLSL_ES.g:1:593: LEFT_ANGLE
                this.mLEFT_ANGLE(); 


                break;
            case 79 :
                // GLSL_ES.g:1:604: RIGHT_ANGLE
                this.mRIGHT_ANGLE(); 


                break;
            case 80 :
                // GLSL_ES.g:1:616: VERTICAL_BAR
                this.mVERTICAL_BAR(); 


                break;
            case 81 :
                // GLSL_ES.g:1:629: CARET
                this.mCARET(); 


                break;
            case 82 :
                // GLSL_ES.g:1:635: AMPERSAND
                this.mAMPERSAND(); 


                break;
            case 83 :
                // GLSL_ES.g:1:645: QUESTION
                this.mQUESTION(); 


                break;
            case 84 :
                // GLSL_ES.g:1:654: WHITESPACE
                this.mWHITESPACE(); 


                break;
            case 85 :
                // GLSL_ES.g:1:665: COMMENT
                this.mCOMMENT(); 


                break;
            case 86 :
                // GLSL_ES.g:1:673: MULTILINE_COMMENT
                this.mMULTILINE_COMMENT(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(GLSL_ESLexer, {
    DFA17_eotS:
        "\u0001\uffff\u0012\u0013\u0001\uffff\u0001\u004e\u0001\u004f\u0001"+
    "\u004e\u0001\u0053\u0001\u0056\u0001\u0058\u0001\u005a\u0001\u005c\u0001"+
    "\u005e\u0001\u0060\u0001\u0062\u0001\u0064\u0001\u0066\u0001\u006a\u0001"+
    "\u006c\u000c\uffff\u0006\u0013\u0001\u0073\u0005\u0013\u0001\u0079\u0001"+
    "\u007d\u000f\u0013\u0001\uffff\u0001\u004e\u0002\uffff\u0001\u004e\u001c"+
    "\uffff\u0006\u0013\u0001\uffff\u0003\u0013\u0001\u0097\u0001\u0013\u0001"+
    "\uffff\u0001\u0013\u0001\u009a\u0001\u0013\u0001\uffff\u0004\u0013\u0001"+
    "\u00a2\u000b\u0013\u0001\u00b0\u0005\u0013\u0001\u00b8\u0002\u0013\u0001"+
    "\uffff\u0002\u0013\u0001\uffff\u0002\u0013\u0001\u00c1\u0001\u00c2\u0001"+
    "\u00c3\u0001\u00c4\u0001\u0013\u0001\uffff\u0004\u0013\u0001\u00ca\u0002"+
    "\u0013\u0001\u00cd\u0001\u00ce\u0001\u00cf\u0001\u00d0\u0002\u0013\u0001"+
    "\uffff\u0001\u00d3\u0001\u00d4\u0001\u00d5\u0001\u00d6\u0001\u00d7\u0002"+
    "\u0013\u0001\uffff\u0001\u00da\u0001\u00db\u0001\u00dc\u0001\u00dd\u0001"+
    "\u0013\u0001\u00df\u0001\u00e0\u0001\u00e1\u0004\uffff\u0005\u0013\u0001"+
    "\uffff\u0002\u0013\u0004\uffff\u0001\u00e9\u0001\u0013\u0005\uffff\u0002"+
    "\u0013\u0004\uffff\u0001\u0013\u0003\uffff\u0002\u0013\u0001\u00f0\u0001"+
    "\u0013\u0001\u00f2\u0002\u0013\u0001\uffff\u0002\u0013\u0001\u00f7\u0001"+
    "\u0013\u0001\u00f9\u0001\u0013\u0001\uffff\u0001\u0013\u0001\uffff\u0001"+
    "\u00fd\u0001\u00fe\u0001\u0013\u0001\u0100\u0001\uffff\u0001\u0013\u0001"+
    "\uffff\u0003\u0013\u0002\uffff\u0001\u0105\u0001\uffff\u0001\u0106\u0001"+
    "\u0107\u0001\u0108\u0001\u0013\u0004\uffff\u0001\u0013\u0001\u010b\u0001"+
    "\uffff",
    DFA17_eofS:
        "\u010c\uffff",
    DFA17_minS:
        "\u0001\u0009\u0001\u0074\u0002\u006f\u0001\u0069\u0001\u006c\u0001"+
    "\u0061\u0001\u0069\u0001\u0066\u0001\u006f\u0001\u0061\u0001\u0075\u0001"+
    "\u0072\u0001\u0065\u0001\u0061\u0001\u0072\u0001\u006e\u0001\u0061\u0001"+
    "\u0068\u0001\uffff\u0001\u002e\u0001\u0030\u0001\u002e\u0001\u002b\u0001"+
    "\u002d\u0004\u003d\u0001\u0026\u0001\u007c\u0001\u005e\u0001\u003d\u0001"+
    "\u002a\u0001\u003d\u000c\uffff\u0001\u0074\u0001\u006f\u0002\u0065\u0001"+
    "\u006e\u0001\u0073\u0001\u0030\u0001\u0073\u0001\u006c\u0001\u006f\u0001"+
    "\u0072\u0001\u0067\u0002\u0030\u0001\u0065\u0001\u0077\u0001\u0074\u0001"+
    "\u0064\u0001\u0074\u0001\u0065\u0001\u0074\u0001\u006d\u0001\u0072\u0001"+
    "\u0075\u0001\u0069\u0001\u0072\u0001\u0063\u0002\u0069\u0001\uffff\u0001"+
    "\u002e\u0002\uffff\u0001\u002e\u001c\uffff\u0001\u0072\u0001\u006c\u0001"+
    "\u0061\u0001\u0063\u0001\u0073\u0001\u0063\u0001\uffff\u0001\u0065\u0001"+
    "\u0073\u0001\u0061\u0001\u0030\u0001\u0068\u0001\uffff\u0001\u0075\u0001"+
    "\u0030\u0001\u0061\u0001\uffff\u0001\u0063\u0001\u0070\u0001\u0032\u0001"+
    "\u0069\u0001\u0030\u0001\u0063\u0001\u0075\u0001\u0070\u0001\u0075\u0001"+
    "\u0065\u0001\u0066\u0001\u0079\u0001\u0032\u0001\u0064\u0001\u006c\u0001"+
    "\u0069\u0001\u0030\u0001\u006b\u0001\u0032\u0001\u0074\u0001\u0069\u0001"+
    "\u0061\u0001\u0030\u0001\u0065\u0001\u0074\u0001\uffff\u0001\u0070\u0001"+
    "\u0074\u0001\uffff\u0001\u0072\u0001\u0032\u0004\u0030\u0001\u0075\u0001"+
    "\uffff\u0001\u0069\u0001\u0072\u0001\u006c\u0001\u0063\u0001\u0030\u0001"+
    "\u006f\u0001\u0069\u0004\u0030\u0001\u0065\u0001\u0062\u0001\uffff\u0005"+
    "\u0030\u0001\u006e\u0001\u0072\u0001\uffff\u0004\u0030\u0001\u0069\u0003"+
    "\u0030\u0004\uffff\u0001\u006d\u0001\u0073\u0001\u006e\u0001\u0065\u0001"+
    "\u0074\u0001\uffff\u0001\u0072\u0001\u006e\u0004\uffff\u0001\u0030\u0001"+
    "\u0075\u0005\uffff\u0001\u0075\u0001\u0064\u0004\uffff\u0001\u0061\u0003"+
    "\uffff\u0001\u0070\u0001\u0069\u0001\u0030\u0001\u0072\u0001\u0030\u0001"+
    "\u006d\u0001\u0067\u0001\uffff\u0001\u0074\u0001\u0065\u0001\u0030\u0001"+
    "\u006e\u0001\u0030\u0001\u006f\u0001\uffff\u0001\u0032\u0001\uffff\u0002"+
    "\u0030\u0001\u0065\u0001\u0030\u0001\uffff\u0001\u0074\u0001\uffff\u0001"+
    "\u006e\u0001\u0044\u0001\u0075\u0002\uffff\u0001\u0030\u0001\uffff\u0003"+
    "\u0030\u0001\u0062\u0004\uffff\u0001\u0065\u0001\u0030\u0001\uffff",
    DFA17_maxS:
        "\u0001\u007e\u0001\u0074\u0001\u0076\u0002\u006f\u0001\u006c\u0001"+
    "\u006f\u0001\u0069\u0001\u0076\u0001\u006f\u0001\u0065\u0001\u0075\u0001"+
    "\u0072\u0001\u0065\u0001\u0074\u0001\u0072\u0001\u006e\u0001\u006f\u0001"+
    "\u0068\u0001\uffff\u0003\u0039\u0006\u003d\u0001\u0026\u0001\u007c\u0001"+
    "\u005e\u0003\u003d\u000c\uffff\u0001\u0074\u0001\u006f\u0002\u0065\u0001"+
    "\u006e\u0001\u0073\u0001\u007a\u0001\u0073\u0001\u006c\u0001\u006f\u0001"+
    "\u0072\u0001\u0067\u0002\u007a\u0001\u0065\u0001\u0077\u0001\u0074\u0001"+
    "\u0064\u0001\u0074\u0001\u0065\u0001\u0074\u0001\u006d\u0001\u0072\u0001"+
    "\u0075\u0001\u0069\u0001\u0072\u0001\u0063\u0002\u0069\u0001\uffff\u0001"+
    "\u0039\u0002\uffff\u0001\u0039\u001c\uffff\u0001\u0072\u0001\u006c\u0001"+
    "\u0061\u0001\u0063\u0001\u0074\u0001\u0063\u0001\uffff\u0001\u0065\u0001"+
    "\u0073\u0001\u0061\u0001\u007a\u0001\u0068\u0001\uffff\u0001\u0075\u0001"+
    "\u007a\u0001\u0061\u0001\uffff\u0001\u0063\u0001\u0070\u0001\u0034\u0001"+
    "\u0069\u0001\u007a\u0001\u0063\u0001\u0075\u0001\u0070\u0001\u0075\u0001"+
    "\u0065\u0001\u0066\u0001\u0079\u0001\u0034\u0001\u0064\u0001\u006c\u0001"+
    "\u0069\u0001\u007a\u0001\u006b\u0001\u0034\u0001\u0074\u0001\u0069\u0001"+
    "\u0061\u0001\u007a\u0001\u0065\u0001\u0074\u0001\uffff\u0001\u0070\u0001"+
    "\u0074\u0001\uffff\u0001\u0072\u0001\u0034\u0004\u007a\u0001\u0075\u0001"+
    "\uffff\u0001\u0069\u0001\u0072\u0001\u006c\u0001\u0063\u0001\u007a\u0001"+
    "\u006f\u0001\u0069\u0004\u007a\u0001\u0065\u0001\u0062\u0001\uffff\u0005"+
    "\u007a\u0001\u006e\u0001\u0072\u0001\uffff\u0004\u007a\u0001\u0069\u0003"+
    "\u007a\u0004\uffff\u0001\u006d\u0001\u0073\u0001\u006e\u0001\u0065\u0001"+
    "\u0074\u0001\uffff\u0001\u0072\u0001\u006e\u0004\uffff\u0001\u007a\u0001"+
    "\u0075\u0005\uffff\u0001\u0075\u0001\u0064\u0004\uffff\u0001\u0061\u0003"+
    "\uffff\u0001\u0070\u0001\u0069\u0001\u007a\u0001\u0072\u0001\u007a\u0001"+
    "\u006d\u0001\u0067\u0001\uffff\u0001\u0074\u0001\u0065\u0001\u007a\u0001"+
    "\u006e\u0001\u007a\u0001\u006f\u0001\uffff\u0001\u0043\u0001\uffff\u0002"+
    "\u007a\u0001\u0065\u0001\u007a\u0001\uffff\u0001\u0074\u0001\uffff\u0001"+
    "\u006e\u0001\u0044\u0001\u0075\u0002\uffff\u0001\u007a\u0001\uffff\u0003"+
    "\u007a\u0001\u0062\u0004\uffff\u0001\u0065\u0001\u007a\u0001\uffff",
    DFA17_acceptS:
        "\u0013\uffff\u0001\u002b\u000f\uffff\u0001\u003c\u0001\u003d\u0001"+
    "\u003e\u0001\u003f\u0001\u0040\u0001\u0041\u0001\u0043\u0001\u0044\u0001"+
    "\u0046\u0001\u0049\u0001\u0053\u0001\u0054\u001d\uffff\u0001\u002c\u0001"+
    "\uffff\u0001\u002d\u0001\u0042\u0001\uffff\u0001\u002e\u0001\u0039\u0001"+
    "\u004a\u0001\u002f\u0001\u003b\u0001\u0048\u0001\u0030\u0001\u004e\u0001"+
    "\u0031\u0001\u004f\u0001\u0032\u0001\u0045\u0001\u0033\u0001\u0047\u0001"+
    "\u0034\u0001\u0052\u0001\u0035\u0001\u0050\u0001\u0036\u0001\u0051\u0001"+
    "\u0037\u0001\u004b\u0001\u0038\u0001\u0055\u0001\u0056\u0001\u004c\u0001"+
    "\u003a\u0001\u004d\u0006\uffff\u0001\u000a\u0005\uffff\u0001\u0010\u0003"+
    "\uffff\u0001\u0011\u0019\uffff\u0001\u000e\u0002\uffff\u0001\u0013\u0007"+
    "\uffff\u0001\u001d\u000d\uffff\u0001\u0002\u0007\uffff\u0001\u000b\u0008"+
    "\uffff\u0001\u0018\u0001\u0019\u0001\u001a\u0001\u001b\u0005\uffff\u0001"+
    "\u0023\u0002\uffff\u0001\u0026\u0001\u0027\u0001\u0028\u0001\u0029\u0002"+
    "\uffff\u0001\u0003\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0002"+
    "\uffff\u0001\u000c\u0001\u000d\u0001\u000f\u0001\u0012\u0001\uffff\u0001"+
    "\u0015\u0001\u0016\u0001\u0017\u0007\uffff\u0001\u002a\u0006\uffff\u0001"+
    "\u001f\u0001\uffff\u0001\u0022\u0004\uffff\u0001\u0009\u0001\uffff\u0001"+
    "\u001c\u0003\uffff\u0001\u0024\u0001\u0025\u0001\uffff\u0001\u0008\u0004"+
    "\uffff\u0001\u0001\u0001\u0014\u0001\u001e\u0001\u0020\u0002\uffff\u0001"+
    "\u0021",
    DFA17_specialS:
        "\u010c\uffff}>",
    DFA17_transitionS: [
            "\u0002\u002e\u0001\uffff\u0002\u002e\u0012\uffff\u0001\u002e"+
            "\u0001\u001c\u0003\uffff\u0001\u0022\u0001\u001d\u0001\uffff"+
            "\u0001\u0023\u0001\u0024\u0001\u0020\u0001\u0017\u0001\u0029"+
            "\u0001\u0018\u0001\u0015\u0001\u0021\u0001\u0016\u0009\u0014"+
            "\u0001\u002a\u0001\u002b\u0001\u0019\u0001\u001b\u0001\u001a"+
            "\u0001\u002d\u0001\uffff\u001a\u0013\u0001\u0025\u0001\uffff"+
            "\u0001\u0026\u0001\u001f\u0001\u0013\u0001\uffff\u0001\u0001"+
            "\u0001\u0002\u0001\u0003\u0001\u0004\u0001\u0005\u0001\u0006"+
            "\u0001\u0013\u0001\u0007\u0001\u0008\u0002\u0013\u0001\u0009"+
            "\u0001\u000a\u0001\u0013\u0001\u000b\u0001\u000c\u0001\u0013"+
            "\u0001\u000d\u0001\u000e\u0001\u000f\u0001\u0010\u0001\u0011"+
            "\u0001\u0012\u0003\u0013\u0001\u0027\u0001\u001e\u0001\u0028"+
            "\u0001\u002c",
            "\u0001\u002f",
            "\u0001\u0030\u0002\uffff\u0001\u0031\u0003\uffff\u0001\u0032",
            "\u0001\u0033",
            "\u0001\u0034\u0005\uffff\u0001\u0035",
            "\u0001\u0036",
            "\u0001\u0037\u000a\uffff\u0001\u0038\u0002\uffff\u0001\u0039",
            "\u0001\u003a",
            "\u0001\u003b\u0007\uffff\u0001\u003c\u0007\uffff\u0001\u003d",
            "\u0001\u003e",
            "\u0001\u003f\u0003\uffff\u0001\u0040",
            "\u0001\u0041",
            "\u0001\u0042",
            "\u0001\u0043",
            "\u0001\u0044\u0012\uffff\u0001\u0045",
            "\u0001\u0046",
            "\u0001\u0047",
            "\u0001\u0048\u0003\uffff\u0001\u0049\u0009\uffff\u0001\u004a",
            "\u0001\u004b",
            "",
            "\u0001\u004c\u0001\uffff\u000a\u004d",
            "\u000a\u004c",
            "\u0001\u004c\u0001\uffff\u0008\u0050\u0002\u004c",
            "\u0001\u0051\u0011\uffff\u0001\u0052",
            "\u0001\u0054\u000f\uffff\u0001\u0055",
            "\u0001\u0057",
            "\u0001\u0059",
            "\u0001\u005b",
            "\u0001\u005d",
            "\u0001\u005f",
            "\u0001\u0061",
            "\u0001\u0063",
            "\u0001\u0065",
            "\u0001\u0069\u0004\uffff\u0001\u0068\u000d\uffff\u0001\u0067",
            "\u0001\u006b",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u006d",
            "\u0001\u006e",
            "\u0001\u006f",
            "\u0001\u0070",
            "\u0001\u0071",
            "\u0001\u0072",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u0074",
            "\u0001\u0075",
            "\u0001\u0076",
            "\u0001\u0077",
            "\u0001\u0078",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u000e\u0013\u0001\u007a\u0004\u0013\u0001\u007b"+
            "\u0001\u0013\u0001\u007c\u0004\u0013",
            "\u0001\u007e",
            "\u0001\u007f",
            "\u0001\u0080",
            "\u0001\u0081",
            "\u0001\u0082",
            "\u0001\u0083",
            "\u0001\u0084",
            "\u0001\u0085",
            "\u0001\u0086",
            "\u0001\u0087",
            "\u0001\u0088",
            "\u0001\u0089",
            "\u0001\u008a",
            "\u0001\u008b",
            "\u0001\u008c",
            "",
            "\u0001\u004c\u0001\uffff\u000a\u004d",
            "",
            "",
            "\u0001\u004c\u0001\uffff\u0008\u0050\u0002\u004c",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u008d",
            "\u0001\u008e",
            "\u0001\u008f",
            "\u0001\u0090",
            "\u0001\u0091\u0001\u0092",
            "\u0001\u0093",
            "",
            "\u0001\u0094",
            "\u0001\u0095",
            "\u0001\u0096",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u0098",
            "",
            "\u0001\u0099",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u009b",
            "",
            "\u0001\u009c",
            "\u0001\u009d",
            "\u0001\u009e\u0001\u009f\u0001\u00a0",
            "\u0001\u00a1",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00a3",
            "\u0001\u00a4",
            "\u0001\u00a5",
            "\u0001\u00a6",
            "\u0001\u00a7",
            "\u0001\u00a8",
            "\u0001\u00a9",
            "\u0001\u00aa\u0001\u00ab\u0001\u00ac",
            "\u0001\u00ad",
            "\u0001\u00ae",
            "\u0001\u00af",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00b1",
            "\u0001\u00b2\u0001\u00b3\u0001\u00b4",
            "\u0001\u00b5",
            "\u0001\u00b6",
            "\u0001\u00b7",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00b9",
            "\u0001\u00ba",
            "",
            "\u0001\u00bb",
            "\u0001\u00bc",
            "",
            "\u0001\u00bd",
            "\u0001\u00be\u0001\u00bf\u0001\u00c0",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00c5",
            "",
            "\u0001\u00c6",
            "\u0001\u00c7",
            "\u0001\u00c8",
            "\u0001\u00c9",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00cb",
            "\u0001\u00cc",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00d1",
            "\u0001\u00d2",
            "",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00d8",
            "\u0001\u00d9",
            "",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00de",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "",
            "",
            "",
            "",
            "\u0001\u00e2",
            "\u0001\u00e3",
            "\u0001\u00e4",
            "\u0001\u00e5",
            "\u0001\u00e6",
            "",
            "\u0001\u00e7",
            "\u0001\u00e8",
            "",
            "",
            "",
            "",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00ea",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u00eb",
            "\u0001\u00ec",
            "",
            "",
            "",
            "",
            "\u0001\u00ed",
            "",
            "",
            "",
            "\u0001\u00ee",
            "\u0001\u00ef",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00f1",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00f3",
            "\u0001\u00f4",
            "",
            "\u0001\u00f5",
            "\u0001\u00f6",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00f8",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00fa",
            "",
            "\u0001\u00fb\u0010\uffff\u0001\u00fc",
            "",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u00ff",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "",
            "\u0001\u0101",
            "",
            "\u0001\u0102",
            "\u0001\u0103",
            "\u0001\u0104",
            "",
            "",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            "\u0001\u0109",
            "",
            "",
            "",
            "",
            "\u0001\u010a",
            "\u000a\u0013\u0007\uffff\u001a\u0013\u0004\uffff\u0001\u0013"+
            "\u0001\uffff\u001a\u0013",
            ""
    ]
});

org.antlr.lang.augmentObject(GLSL_ESLexer, {
    DFA17_eot:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESLexer.DFA17_eotS),
    DFA17_eof:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESLexer.DFA17_eofS),
    DFA17_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESLexer.DFA17_minS),
    DFA17_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESLexer.DFA17_maxS),
    DFA17_accept:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESLexer.DFA17_acceptS),
    DFA17_special:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESLexer.DFA17_specialS),
    DFA17_transition: (function() {
        var a = [],
            i,
            numStates = GLSL_ESLexer.DFA17_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESLexer.DFA17_transitionS[i]));
        }
        return a;
    })()
});

GLSL_ESLexer.DFA17 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 17;
    this.eot = GLSL_ESLexer.DFA17_eot;
    this.eof = GLSL_ESLexer.DFA17_eof;
    this.min = GLSL_ESLexer.DFA17_min;
    this.max = GLSL_ESLexer.DFA17_max;
    this.accept = GLSL_ESLexer.DFA17_accept;
    this.special = GLSL_ESLexer.DFA17_special;
    this.transition = GLSL_ESLexer.DFA17_transition;
};

org.antlr.lang.extend(GLSL_ESLexer.DFA17, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( ATTRIBUTE | BOOL | BREAK | BVEC2 | BVEC3 | BVEC4 | CONST | CONTINUE | DISCARD | DO | ELSE | FALSE | FLOAT | FOR | HIGH_PRECISION | IF | IN | INOUT | INT | INVARIANT | IVEC2 | IVEC3 | IVEC4 | LOW_PRECISION | MAT2 | MAT3 | MAT4 | MEDIUM_PRECISION | OUT | PRECISION | RETURN | SAMPLER2D | SAMPLERCUBE | STRUCT | TRUE | UNIFORM | VARYING | VEC2 | VEC3 | VEC4 | VOID | WHILE | IDENTIFIER | FLOATCONSTANT | INTCONSTANT | INC_OP | DEC_OP | LE_OP | GE_OP | EQ_OP | NE_OP | AND_OP | OR_OP | XOR_OP | MUL_ASSIGN | DIV_ASSIGN | ADD_ASSIGN | MOD_ASSIGN | SUB_ASSIGN | LEFT_PAREN | RIGHT_PAREN | LEFT_BRACKET | RIGHT_BRACKET | LEFT_BRACE | RIGHT_BRACE | DOT | COMMA | COLON | EQUAL | SEMICOLON | BANG | DASH | TILDE | PLUS | STAR | SLASH | PERCENT | LEFT_ANGLE | RIGHT_ANGLE | VERTICAL_BAR | CARET | AMPERSAND | QUESTION | WHITESPACE | COMMENT | MULTILINE_COMMENT );";
    },
    dummy: null
});
 
})();