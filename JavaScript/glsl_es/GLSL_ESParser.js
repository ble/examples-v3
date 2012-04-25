// $ANTLR 3.3 Nov 30, 2010 12:50:56 GLSL_ES.g 2012-04-25 08:36:45

var GLSL_ESParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    GLSL_ESParser.superclass.constructor.call(this, input, state);

    this.dfa4 = new GLSL_ESParser.DFA4(this);
    this.dfa17 = new GLSL_ESParser.DFA17(this);
    this.dfa19 = new GLSL_ESParser.DFA19(this);
    this.dfa41 = new GLSL_ESParser.DFA41(this);
    this.dfa48 = new GLSL_ESParser.DFA48(this);
    this.dfa50 = new GLSL_ESParser.DFA50(this);
    this.dfa55 = new GLSL_ESParser.DFA55(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(GLSL_ESParser, {
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
// public class variables
var EOF= -1,
    IDENTIFIER= 4,
    INTCONSTANT= 5,
    FLOATCONSTANT= 6,
    BOOLCONSTANT= 7,
    LEFT_PAREN= 8,
    RIGHT_PAREN= 9,
    LEFT_BRACKET= 10,
    RIGHT_BRACKET= 11,
    DOT= 12,
    INC_OP= 13,
    DEC_OP= 14,
    VOID= 15,
    COMMA= 16,
    FLOAT= 17,
    INT= 18,
    BOOL= 19,
    VEC2= 20,
    VEC3= 21,
    VEC4= 22,
    BVEC2= 23,
    BVEC3= 24,
    BVEC4= 25,
    IVEC2= 26,
    IVEC3= 27,
    IVEC4= 28,
    MAT2= 29,
    MAT3= 30,
    MAT4= 31,
    PLUS= 32,
    DASH= 33,
    BANG= 34,
    STAR= 35,
    SLASH= 36,
    LEFT_ANGLE= 37,
    RIGHT_ANGLE= 38,
    LE_OP= 39,
    GE_OP= 40,
    EQ_OP= 41,
    NE_OP= 42,
    AND_OP= 43,
    XOR_OP= 44,
    OR_OP= 45,
    QUESTION= 46,
    COLON= 47,
    EQUAL= 48,
    MUL_ASSIGN= 49,
    DIV_ASSIGN= 50,
    ADD_ASSIGN= 51,
    SUB_ASSIGN= 52,
    SEMICOLON= 53,
    PRECISION= 54,
    IN= 55,
    OUT= 56,
    INOUT= 57,
    INVARIANT= 58,
    CONST= 59,
    ATTRIBUTE= 60,
    VARYING= 61,
    UNIFORM= 62,
    SAMPLER2D= 63,
    SAMPLERCUBE= 64,
    HIGH_PRECISION= 65,
    MEDIUM_PRECISION= 66,
    LOW_PRECISION= 67,
    STRUCT= 68,
    LEFT_BRACE= 69,
    RIGHT_BRACE= 70,
    IF= 71,
    ELSE= 72,
    WHILE= 73,
    DO= 74,
    FOR= 75,
    CONTINUE= 76,
    BREAK= 77,
    RETURN= 78,
    DISCARD= 79,
    FALSE= 80,
    TRUE= 81,
    EXPONENT_PART= 82,
    DECIMAL_CONSTANT= 83,
    OCTAL_CONSTANT= 84,
    HEXDIGIT= 85,
    HEXADECIMAL_CONSTANT= 86,
    MOD_ASSIGN= 87,
    TILDE= 88,
    PERCENT= 89,
    VERTICAL_BAR= 90,
    CARET= 91,
    AMPERSAND= 92,
    WHITESPACE= 93,
    COMMENT= 94,
    MULTILINE_COMMENT= 95;

// public instance methods/vars
org.antlr.lang.extend(GLSL_ESParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return GLSL_ESParser.tokenNames; },
    getGrammarFileName: function() { return "GLSL_ES.g"; }
});
org.antlr.lang.augmentObject(GLSL_ESParser.prototype, {

    // inline static return class
    translation_unit_return: (function() {
        GLSL_ESParser.translation_unit_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.translation_unit_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:44:1: translation_unit : ( external_declaration )* EOF ;
    // $ANTLR start "translation_unit"
    translation_unit: function() {
        var retval = new GLSL_ESParser.translation_unit_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var EOF2 = null;
         var external_declaration1 = null;

        var EOF2_tree=null;

        try {
            // GLSL_ES.g:45:3: ( ( external_declaration )* EOF )
            // GLSL_ES.g:45:5: ( external_declaration )* EOF
            root_0 = this.adaptor.nil();

            // GLSL_ES.g:45:5: ( external_declaration )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==IDENTIFIER||LA1_0==VOID||(LA1_0>=FLOAT && LA1_0<=MAT4)||LA1_0==PRECISION||(LA1_0>=INVARIANT && LA1_0<=STRUCT)) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // GLSL_ES.g:45:7: external_declaration
                    this.pushFollow(GLSL_ESParser.FOLLOW_external_declaration_in_translation_unit60);
                    external_declaration1=this.external_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, external_declaration1.getTree());


                    break;

                default :
                    break loop1;
                }
            } while (true);

            EOF2=this.match(this.input,EOF,GLSL_ESParser.FOLLOW_EOF_in_translation_unit65); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            EOF2_tree = this.adaptor.create(EOF2);
            this.adaptor.addChild(root_0, EOF2_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    variable_identifier_return: (function() {
        GLSL_ESParser.variable_identifier_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.variable_identifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:48:1: variable_identifier : IDENTIFIER ;
    // $ANTLR start "variable_identifier"
    variable_identifier: function() {
        var retval = new GLSL_ESParser.variable_identifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER3 = null;

        var IDENTIFIER3_tree=null;

        try {
            // GLSL_ES.g:49:3: ( IDENTIFIER )
            // GLSL_ES.g:49:5: IDENTIFIER
            root_0 = this.adaptor.nil();

            IDENTIFIER3=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_variable_identifier78); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER3_tree = this.adaptor.create(IDENTIFIER3);
            this.adaptor.addChild(root_0, IDENTIFIER3_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    primary_expression_return: (function() {
        GLSL_ESParser.primary_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.primary_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:52:1: primary_expression : ( INTCONSTANT | FLOATCONSTANT | BOOLCONSTANT | variable_identifier | LEFT_PAREN expression RIGHT_PAREN );
    // $ANTLR start "primary_expression"
    primary_expression: function() {
        var retval = new GLSL_ESParser.primary_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INTCONSTANT4 = null;
        var FLOATCONSTANT5 = null;
        var BOOLCONSTANT6 = null;
        var LEFT_PAREN8 = null;
        var RIGHT_PAREN10 = null;
         var variable_identifier7 = null;
         var expression9 = null;

        var INTCONSTANT4_tree=null;
        var FLOATCONSTANT5_tree=null;
        var BOOLCONSTANT6_tree=null;
        var LEFT_PAREN8_tree=null;
        var RIGHT_PAREN10_tree=null;

        try {
            // GLSL_ES.g:53:3: ( INTCONSTANT | FLOATCONSTANT | BOOLCONSTANT | variable_identifier | LEFT_PAREN expression RIGHT_PAREN )
            var alt2=5;
            switch ( this.input.LA(1) ) {
            case INTCONSTANT:
                alt2=1;
                break;
            case FLOATCONSTANT:
                alt2=2;
                break;
            case BOOLCONSTANT:
                alt2=3;
                break;
            case IDENTIFIER:
                alt2=4;
                break;
            case LEFT_PAREN:
                alt2=5;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }

            switch (alt2) {
                case 1 :
                    // GLSL_ES.g:53:5: INTCONSTANT
                    root_0 = this.adaptor.nil();

                    INTCONSTANT4=this.match(this.input,INTCONSTANT,GLSL_ESParser.FOLLOW_INTCONSTANT_in_primary_expression91); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    INTCONSTANT4_tree = this.adaptor.create(INTCONSTANT4);
                    this.adaptor.addChild(root_0, INTCONSTANT4_tree);
                    }


                    break;
                case 2 :
                    // GLSL_ES.g:54:5: FLOATCONSTANT
                    root_0 = this.adaptor.nil();

                    FLOATCONSTANT5=this.match(this.input,FLOATCONSTANT,GLSL_ESParser.FOLLOW_FLOATCONSTANT_in_primary_expression97); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    FLOATCONSTANT5_tree = this.adaptor.create(FLOATCONSTANT5);
                    this.adaptor.addChild(root_0, FLOATCONSTANT5_tree);
                    }


                    break;
                case 3 :
                    // GLSL_ES.g:55:5: BOOLCONSTANT
                    root_0 = this.adaptor.nil();

                    BOOLCONSTANT6=this.match(this.input,BOOLCONSTANT,GLSL_ESParser.FOLLOW_BOOLCONSTANT_in_primary_expression103); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    BOOLCONSTANT6_tree = this.adaptor.create(BOOLCONSTANT6);
                    this.adaptor.addChild(root_0, BOOLCONSTANT6_tree);
                    }


                    break;
                case 4 :
                    // GLSL_ES.g:56:5: variable_identifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_variable_identifier_in_primary_expression109);
                    variable_identifier7=this.variable_identifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, variable_identifier7.getTree());


                    break;
                case 5 :
                    // GLSL_ES.g:57:5: LEFT_PAREN expression RIGHT_PAREN
                    root_0 = this.adaptor.nil();

                    LEFT_PAREN8=this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_primary_expression115); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_PAREN8_tree = this.adaptor.create(LEFT_PAREN8);
                    this.adaptor.addChild(root_0, LEFT_PAREN8_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_primary_expression117);
                    expression9=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression9.getTree());
                    RIGHT_PAREN10=this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_primary_expression119); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_PAREN10_tree = this.adaptor.create(RIGHT_PAREN10);
                    this.adaptor.addChild(root_0, RIGHT_PAREN10_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    postfix_expression_return: (function() {
        GLSL_ESParser.postfix_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.postfix_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:60:1: postfix_expression : primary_expression_or_function_call ( LEFT_BRACKET integer_expression RIGHT_BRACKET | DOT field_selection | INC_OP | DEC_OP )* ;
    // $ANTLR start "postfix_expression"
    postfix_expression: function() {
        var retval = new GLSL_ESParser.postfix_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LEFT_BRACKET12 = null;
        var RIGHT_BRACKET14 = null;
        var DOT15 = null;
        var INC_OP17 = null;
        var DEC_OP18 = null;
         var primary_expression_or_function_call11 = null;
         var integer_expression13 = null;
         var field_selection16 = null;

        var LEFT_BRACKET12_tree=null;
        var RIGHT_BRACKET14_tree=null;
        var DOT15_tree=null;
        var INC_OP17_tree=null;
        var DEC_OP18_tree=null;

        try {
            // GLSL_ES.g:61:3: ( primary_expression_or_function_call ( LEFT_BRACKET integer_expression RIGHT_BRACKET | DOT field_selection | INC_OP | DEC_OP )* )
            // GLSL_ES.g:61:5: primary_expression_or_function_call ( LEFT_BRACKET integer_expression RIGHT_BRACKET | DOT field_selection | INC_OP | DEC_OP )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_primary_expression_or_function_call_in_postfix_expression132);
            primary_expression_or_function_call11=this.primary_expression_or_function_call();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primary_expression_or_function_call11.getTree());
            // GLSL_ES.g:62:5: ( LEFT_BRACKET integer_expression RIGHT_BRACKET | DOT field_selection | INC_OP | DEC_OP )*
            loop3:
            do {
                var alt3=5;
                switch ( this.input.LA(1) ) {
                case LEFT_BRACKET:
                    alt3=1;
                    break;
                case DOT:
                    alt3=2;
                    break;
                case INC_OP:
                    alt3=3;
                    break;
                case DEC_OP:
                    alt3=4;
                    break;

                }

                switch (alt3) {
                case 1 :
                    // GLSL_ES.g:62:7: LEFT_BRACKET integer_expression RIGHT_BRACKET
                    LEFT_BRACKET12=this.match(this.input,LEFT_BRACKET,GLSL_ESParser.FOLLOW_LEFT_BRACKET_in_postfix_expression140); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_BRACKET12_tree = this.adaptor.create(LEFT_BRACKET12);
                    this.adaptor.addChild(root_0, LEFT_BRACKET12_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_integer_expression_in_postfix_expression142);
                    integer_expression13=this.integer_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, integer_expression13.getTree());
                    RIGHT_BRACKET14=this.match(this.input,RIGHT_BRACKET,GLSL_ESParser.FOLLOW_RIGHT_BRACKET_in_postfix_expression144); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_BRACKET14_tree = this.adaptor.create(RIGHT_BRACKET14);
                    this.adaptor.addChild(root_0, RIGHT_BRACKET14_tree);
                    }


                    break;
                case 2 :
                    // GLSL_ES.g:63:9: DOT field_selection
                    DOT15=this.match(this.input,DOT,GLSL_ESParser.FOLLOW_DOT_in_postfix_expression154); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    DOT15_tree = this.adaptor.create(DOT15);
                    this.adaptor.addChild(root_0, DOT15_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_field_selection_in_postfix_expression156);
                    field_selection16=this.field_selection();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, field_selection16.getTree());


                    break;
                case 3 :
                    // GLSL_ES.g:64:9: INC_OP
                    INC_OP17=this.match(this.input,INC_OP,GLSL_ESParser.FOLLOW_INC_OP_in_postfix_expression166); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    INC_OP17_tree = this.adaptor.create(INC_OP17);
                    this.adaptor.addChild(root_0, INC_OP17_tree);
                    }


                    break;
                case 4 :
                    // GLSL_ES.g:65:9: DEC_OP
                    DEC_OP18=this.match(this.input,DEC_OP,GLSL_ESParser.FOLLOW_DEC_OP_in_postfix_expression176); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    DEC_OP18_tree = this.adaptor.create(DEC_OP18);
                    this.adaptor.addChild(root_0, DEC_OP18_tree);
                    }


                    break;

                default :
                    break loop3;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    primary_expression_or_function_call_return: (function() {
        GLSL_ESParser.primary_expression_or_function_call_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.primary_expression_or_function_call_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:69:1: primary_expression_or_function_call : ( ( INTCONSTANT )=> primary_expression | ( FLOATCONSTANT )=> primary_expression | ( BOOLCONSTANT )=> primary_expression | ( LEFT_PAREN )=> primary_expression | ( function_call_header )=> function_call | primary_expression );
    // $ANTLR start "primary_expression_or_function_call"
    primary_expression_or_function_call: function() {
        var retval = new GLSL_ESParser.primary_expression_or_function_call_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var primary_expression19 = null;
         var primary_expression20 = null;
         var primary_expression21 = null;
         var primary_expression22 = null;
         var function_call23 = null;
         var primary_expression24 = null;


        try {
            // GLSL_ES.g:70:3: ( ( INTCONSTANT )=> primary_expression | ( FLOATCONSTANT )=> primary_expression | ( BOOLCONSTANT )=> primary_expression | ( LEFT_PAREN )=> primary_expression | ( function_call_header )=> function_call | primary_expression )
            var alt4=6;
            alt4 = this.dfa4.predict(this.input);
            switch (alt4) {
                case 1 :
                    // GLSL_ES.g:70:5: ( INTCONSTANT )=> primary_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_primary_expression_in_primary_expression_or_function_call204);
                    primary_expression19=this.primary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primary_expression19.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:71:5: ( FLOATCONSTANT )=> primary_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_primary_expression_in_primary_expression_or_function_call218);
                    primary_expression20=this.primary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primary_expression20.getTree());


                    break;
                case 3 :
                    // GLSL_ES.g:72:5: ( BOOLCONSTANT )=> primary_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_primary_expression_in_primary_expression_or_function_call232);
                    primary_expression21=this.primary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primary_expression21.getTree());


                    break;
                case 4 :
                    // GLSL_ES.g:73:5: ( LEFT_PAREN )=> primary_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_primary_expression_in_primary_expression_or_function_call246);
                    primary_expression22=this.primary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primary_expression22.getTree());


                    break;
                case 5 :
                    // GLSL_ES.g:74:5: ( function_call_header )=> function_call
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_function_call_in_primary_expression_or_function_call260);
                    function_call23=this.function_call();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_call23.getTree());


                    break;
                case 6 :
                    // GLSL_ES.g:75:5: primary_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_primary_expression_in_primary_expression_or_function_call266);
                    primary_expression24=this.primary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, primary_expression24.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    integer_expression_return: (function() {
        GLSL_ESParser.integer_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.integer_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:78:1: integer_expression : expression ;
    // $ANTLR start "integer_expression"
    integer_expression: function() {
        var retval = new GLSL_ESParser.integer_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var expression25 = null;


        try {
            // GLSL_ES.g:79:3: ( expression )
            // GLSL_ES.g:79:5: expression
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_integer_expression279);
            expression25=this.expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression25.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_call_return: (function() {
        GLSL_ESParser.function_call_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.function_call_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:82:1: function_call : function_call_generic ;
    // $ANTLR start "function_call"
    function_call: function() {
        var retval = new GLSL_ESParser.function_call_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var function_call_generic26 = null;


        try {
            // GLSL_ES.g:83:3: ( function_call_generic )
            // GLSL_ES.g:83:5: function_call_generic
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_function_call_generic_in_function_call292);
            function_call_generic26=this.function_call_generic();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_call_generic26.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_call_generic_return: (function() {
        GLSL_ESParser.function_call_generic_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.function_call_generic_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:86:1: function_call_generic : function_call_header ( ( VOID )? | assignment_expression ( COMMA assignment_expression )* ) RIGHT_PAREN ;
    // $ANTLR start "function_call_generic"
    function_call_generic: function() {
        var retval = new GLSL_ESParser.function_call_generic_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var VOID28 = null;
        var COMMA30 = null;
        var RIGHT_PAREN32 = null;
         var function_call_header27 = null;
         var assignment_expression29 = null;
         var assignment_expression31 = null;

        var VOID28_tree=null;
        var COMMA30_tree=null;
        var RIGHT_PAREN32_tree=null;

        try {
            // GLSL_ES.g:87:3: ( function_call_header ( ( VOID )? | assignment_expression ( COMMA assignment_expression )* ) RIGHT_PAREN )
            // GLSL_ES.g:87:5: function_call_header ( ( VOID )? | assignment_expression ( COMMA assignment_expression )* ) RIGHT_PAREN
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_function_call_header_in_function_call_generic305);
            function_call_header27=this.function_call_header();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_call_header27.getTree());
            // GLSL_ES.g:88:5: ( ( VOID )? | assignment_expression ( COMMA assignment_expression )* )
            var alt7=2;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0==RIGHT_PAREN||LA7_0==VOID) ) {
                alt7=1;
            }
            else if ( ((LA7_0>=IDENTIFIER && LA7_0<=LEFT_PAREN)||(LA7_0>=INC_OP && LA7_0<=DEC_OP)||(LA7_0>=FLOAT && LA7_0<=BANG)) ) {
                alt7=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // GLSL_ES.g:89:9: ( VOID )?
                    // GLSL_ES.g:89:9: ( VOID )?
                    var alt5=2;
                    var LA5_0 = this.input.LA(1);

                    if ( (LA5_0==VOID) ) {
                        alt5=1;
                    }
                    switch (alt5) {
                        case 1 :
                            // GLSL_ES.g:89:10: VOID
                            VOID28=this.match(this.input,VOID,GLSL_ESParser.FOLLOW_VOID_in_function_call_generic322); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            VOID28_tree = this.adaptor.create(VOID28);
                            this.adaptor.addChild(root_0, VOID28_tree);
                            }


                            break;

                    }



                    break;
                case 2 :
                    // GLSL_ES.g:90:9: assignment_expression ( COMMA assignment_expression )*
                    this.pushFollow(GLSL_ESParser.FOLLOW_assignment_expression_in_function_call_generic334);
                    assignment_expression29=this.assignment_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression29.getTree());
                    // GLSL_ES.g:90:31: ( COMMA assignment_expression )*
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( (LA6_0==COMMA) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // GLSL_ES.g:90:32: COMMA assignment_expression
                            COMMA30=this.match(this.input,COMMA,GLSL_ESParser.FOLLOW_COMMA_in_function_call_generic337); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            COMMA30_tree = this.adaptor.create(COMMA30);
                            this.adaptor.addChild(root_0, COMMA30_tree);
                            }
                            this.pushFollow(GLSL_ESParser.FOLLOW_assignment_expression_in_function_call_generic339);
                            assignment_expression31=this.assignment_expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression31.getTree());


                            break;

                        default :
                            break loop6;
                        }
                    } while (true);



                    break;

            }

            RIGHT_PAREN32=this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_function_call_generic353); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            RIGHT_PAREN32_tree = this.adaptor.create(RIGHT_PAREN32);
            this.adaptor.addChild(root_0, RIGHT_PAREN32_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_call_header_return: (function() {
        GLSL_ESParser.function_call_header_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.function_call_header_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:95:1: function_call_header : function_identifier LEFT_PAREN ;
    // $ANTLR start "function_call_header"
    function_call_header: function() {
        var retval = new GLSL_ESParser.function_call_header_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LEFT_PAREN34 = null;
         var function_identifier33 = null;

        var LEFT_PAREN34_tree=null;

        try {
            // GLSL_ES.g:96:3: ( function_identifier LEFT_PAREN )
            // GLSL_ES.g:96:5: function_identifier LEFT_PAREN
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_function_identifier_in_function_call_header366);
            function_identifier33=this.function_identifier();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_identifier33.getTree());
            LEFT_PAREN34=this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_function_call_header368); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            LEFT_PAREN34_tree = this.adaptor.create(LEFT_PAREN34);
            this.adaptor.addChild(root_0, LEFT_PAREN34_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_identifier_return: (function() {
        GLSL_ESParser.function_identifier_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.function_identifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:101:1: function_identifier : constructor_identifier ;
    // $ANTLR start "function_identifier"
    function_identifier: function() {
        var retval = new GLSL_ESParser.function_identifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var constructor_identifier35 = null;


        try {
            // GLSL_ES.g:102:3: ( constructor_identifier )
            // GLSL_ES.g:102:5: constructor_identifier
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_constructor_identifier_in_function_identifier383);
            constructor_identifier35=this.constructor_identifier();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constructor_identifier35.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    constructor_identifier_return: (function() {
        GLSL_ESParser.constructor_identifier_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.constructor_identifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:113:1: constructor_identifier : ( FLOAT | INT | BOOL | VEC2 | VEC3 | VEC4 | BVEC2 | BVEC3 | BVEC4 | IVEC2 | IVEC3 | IVEC4 | MAT2 | MAT3 | MAT4 | IDENTIFIER );
    // $ANTLR start "constructor_identifier"
    constructor_identifier: function() {
        var retval = new GLSL_ESParser.constructor_identifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set36 = null;

        var set36_tree=null;

        try {
            // GLSL_ES.g:114:3: ( FLOAT | INT | BOOL | VEC2 | VEC3 | VEC4 | BVEC2 | BVEC3 | BVEC4 | IVEC2 | IVEC3 | IVEC4 | MAT2 | MAT3 | MAT4 | IDENTIFIER )
            // GLSL_ES.g:
            root_0 = this.adaptor.nil();

            set36=this.input.LT(1);
            if ( this.input.LA(1)==IDENTIFIER||(this.input.LA(1)>=FLOAT && this.input.LA(1)<=MAT4) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set36));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unary_expression_return: (function() {
        GLSL_ESParser.unary_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.unary_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:133:1: unary_expression : ( INC_OP | DEC_OP | unary_operator )* postfix_expression ;
    // $ANTLR start "unary_expression"
    unary_expression: function() {
        var retval = new GLSL_ESParser.unary_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var INC_OP37 = null;
        var DEC_OP38 = null;
         var unary_operator39 = null;
         var postfix_expression40 = null;

        var INC_OP37_tree=null;
        var DEC_OP38_tree=null;

        try {
            // GLSL_ES.g:134:3: ( ( INC_OP | DEC_OP | unary_operator )* postfix_expression )
            // GLSL_ES.g:134:5: ( INC_OP | DEC_OP | unary_operator )* postfix_expression
            root_0 = this.adaptor.nil();

            // GLSL_ES.g:134:5: ( INC_OP | DEC_OP | unary_operator )*
            loop8:
            do {
                var alt8=4;
                switch ( this.input.LA(1) ) {
                case INC_OP:
                    alt8=1;
                    break;
                case DEC_OP:
                    alt8=2;
                    break;
                case PLUS:
                case DASH:
                case BANG:
                    alt8=3;
                    break;

                }

                switch (alt8) {
                case 1 :
                    // GLSL_ES.g:134:6: INC_OP
                    INC_OP37=this.match(this.input,INC_OP,GLSL_ESParser.FOLLOW_INC_OP_in_unary_expression509); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    INC_OP37_tree = this.adaptor.create(INC_OP37);
                    this.adaptor.addChild(root_0, INC_OP37_tree);
                    }


                    break;
                case 2 :
                    // GLSL_ES.g:134:15: DEC_OP
                    DEC_OP38=this.match(this.input,DEC_OP,GLSL_ESParser.FOLLOW_DEC_OP_in_unary_expression513); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    DEC_OP38_tree = this.adaptor.create(DEC_OP38);
                    this.adaptor.addChild(root_0, DEC_OP38_tree);
                    }


                    break;
                case 3 :
                    // GLSL_ES.g:134:24: unary_operator
                    this.pushFollow(GLSL_ESParser.FOLLOW_unary_operator_in_unary_expression517);
                    unary_operator39=this.unary_operator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_operator39.getTree());


                    break;

                default :
                    break loop8;
                }
            } while (true);

            this.pushFollow(GLSL_ESParser.FOLLOW_postfix_expression_in_unary_expression521);
            postfix_expression40=this.postfix_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, postfix_expression40.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    unary_operator_return: (function() {
        GLSL_ESParser.unary_operator_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.unary_operator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:139:1: unary_operator : ( PLUS | DASH | BANG );
    // $ANTLR start "unary_operator"
    unary_operator: function() {
        var retval = new GLSL_ESParser.unary_operator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set41 = null;

        var set41_tree=null;

        try {
            // GLSL_ES.g:140:3: ( PLUS | DASH | BANG )
            // GLSL_ES.g:
            root_0 = this.adaptor.nil();

            set41=this.input.LT(1);
            if ( (this.input.LA(1)>=PLUS && this.input.LA(1)<=BANG) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set41));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    multiplicative_expression_return: (function() {
        GLSL_ESParser.multiplicative_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.multiplicative_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:148:1: multiplicative_expression : unary_expression ( ( STAR | SLASH ) unary_expression )* ;
    // $ANTLR start "multiplicative_expression"
    multiplicative_expression: function() {
        var retval = new GLSL_ESParser.multiplicative_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set43 = null;
         var unary_expression42 = null;
         var unary_expression44 = null;

        var set43_tree=null;

        try {
            // GLSL_ES.g:149:3: ( unary_expression ( ( STAR | SLASH ) unary_expression )* )
            // GLSL_ES.g:149:5: unary_expression ( ( STAR | SLASH ) unary_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_unary_expression_in_multiplicative_expression564);
            unary_expression42=this.unary_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_expression42.getTree());
            // GLSL_ES.g:149:22: ( ( STAR | SLASH ) unary_expression )*
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( ((LA9_0>=STAR && LA9_0<=SLASH)) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // GLSL_ES.g:149:23: ( STAR | SLASH ) unary_expression
                    set43=this.input.LT(1);
                    if ( (this.input.LA(1)>=STAR && this.input.LA(1)<=SLASH) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set43));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(GLSL_ESParser.FOLLOW_unary_expression_in_multiplicative_expression575);
                    unary_expression44=this.unary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_expression44.getTree());


                    break;

                default :
                    break loop9;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    additive_expression_return: (function() {
        GLSL_ESParser.additive_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.additive_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:153:1: additive_expression : multiplicative_expression ( ( PLUS | DASH ) multiplicative_expression )* ;
    // $ANTLR start "additive_expression"
    additive_expression: function() {
        var retval = new GLSL_ESParser.additive_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set46 = null;
         var multiplicative_expression45 = null;
         var multiplicative_expression47 = null;

        var set46_tree=null;

        try {
            // GLSL_ES.g:154:3: ( multiplicative_expression ( ( PLUS | DASH ) multiplicative_expression )* )
            // GLSL_ES.g:154:5: multiplicative_expression ( ( PLUS | DASH ) multiplicative_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_multiplicative_expression_in_additive_expression591);
            multiplicative_expression45=this.multiplicative_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicative_expression45.getTree());
            // GLSL_ES.g:154:31: ( ( PLUS | DASH ) multiplicative_expression )*
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( ((LA10_0>=PLUS && LA10_0<=DASH)) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // GLSL_ES.g:154:32: ( PLUS | DASH ) multiplicative_expression
                    set46=this.input.LT(1);
                    if ( (this.input.LA(1)>=PLUS && this.input.LA(1)<=DASH) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set46));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(GLSL_ESParser.FOLLOW_multiplicative_expression_in_additive_expression602);
                    multiplicative_expression47=this.multiplicative_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, multiplicative_expression47.getTree());


                    break;

                default :
                    break loop10;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    shift_expression_return: (function() {
        GLSL_ESParser.shift_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.shift_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:157:1: shift_expression : additive_expression ;
    // $ANTLR start "shift_expression"
    shift_expression: function() {
        var retval = new GLSL_ESParser.shift_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var additive_expression48 = null;


        try {
            // GLSL_ES.g:158:3: ( additive_expression )
            // GLSL_ES.g:158:5: additive_expression
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_additive_expression_in_shift_expression617);
            additive_expression48=this.additive_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, additive_expression48.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    relational_expression_return: (function() {
        GLSL_ESParser.relational_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.relational_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:163:1: relational_expression : shift_expression ( ( LEFT_ANGLE | RIGHT_ANGLE | LE_OP | GE_OP ) shift_expression )* ;
    // $ANTLR start "relational_expression"
    relational_expression: function() {
        var retval = new GLSL_ESParser.relational_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set50 = null;
         var shift_expression49 = null;
         var shift_expression51 = null;

        var set50_tree=null;

        try {
            // GLSL_ES.g:164:3: ( shift_expression ( ( LEFT_ANGLE | RIGHT_ANGLE | LE_OP | GE_OP ) shift_expression )* )
            // GLSL_ES.g:164:5: shift_expression ( ( LEFT_ANGLE | RIGHT_ANGLE | LE_OP | GE_OP ) shift_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_shift_expression_in_relational_expression632);
            shift_expression49=this.shift_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shift_expression49.getTree());
            // GLSL_ES.g:164:22: ( ( LEFT_ANGLE | RIGHT_ANGLE | LE_OP | GE_OP ) shift_expression )*
            loop11:
            do {
                var alt11=2;
                var LA11_0 = this.input.LA(1);

                if ( ((LA11_0>=LEFT_ANGLE && LA11_0<=GE_OP)) ) {
                    alt11=1;
                }


                switch (alt11) {
                case 1 :
                    // GLSL_ES.g:164:23: ( LEFT_ANGLE | RIGHT_ANGLE | LE_OP | GE_OP ) shift_expression
                    set50=this.input.LT(1);
                    if ( (this.input.LA(1)>=LEFT_ANGLE && this.input.LA(1)<=GE_OP) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set50));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(GLSL_ESParser.FOLLOW_shift_expression_in_relational_expression651);
                    shift_expression51=this.shift_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, shift_expression51.getTree());


                    break;

                default :
                    break loop11;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    equality_expression_return: (function() {
        GLSL_ESParser.equality_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.equality_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:167:1: equality_expression : relational_expression ( ( EQ_OP | NE_OP ) relational_expression )* ;
    // $ANTLR start "equality_expression"
    equality_expression: function() {
        var retval = new GLSL_ESParser.equality_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set53 = null;
         var relational_expression52 = null;
         var relational_expression54 = null;

        var set53_tree=null;

        try {
            // GLSL_ES.g:168:3: ( relational_expression ( ( EQ_OP | NE_OP ) relational_expression )* )
            // GLSL_ES.g:168:5: relational_expression ( ( EQ_OP | NE_OP ) relational_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_relational_expression_in_equality_expression666);
            relational_expression52=this.relational_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relational_expression52.getTree());
            // GLSL_ES.g:168:27: ( ( EQ_OP | NE_OP ) relational_expression )*
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( ((LA12_0>=EQ_OP && LA12_0<=NE_OP)) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // GLSL_ES.g:168:28: ( EQ_OP | NE_OP ) relational_expression
                    set53=this.input.LT(1);
                    if ( (this.input.LA(1)>=EQ_OP && this.input.LA(1)<=NE_OP) ) {
                        this.input.consume();
                        if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set53));
                        this.state.errorRecovery=false;this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        throw mse;
                    }

                    this.pushFollow(GLSL_ESParser.FOLLOW_relational_expression_in_equality_expression677);
                    relational_expression54=this.relational_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, relational_expression54.getTree());


                    break;

                default :
                    break loop12;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    and_expression_return: (function() {
        GLSL_ESParser.and_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.and_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:171:1: and_expression : equality_expression ;
    // $ANTLR start "and_expression"
    and_expression: function() {
        var retval = new GLSL_ESParser.and_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var equality_expression55 = null;


        try {
            // GLSL_ES.g:172:3: ( equality_expression )
            // GLSL_ES.g:172:5: equality_expression
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_equality_expression_in_and_expression692);
            equality_expression55=this.equality_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, equality_expression55.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    exclusive_or_expression_return: (function() {
        GLSL_ESParser.exclusive_or_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.exclusive_or_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:176:1: exclusive_or_expression : and_expression ;
    // $ANTLR start "exclusive_or_expression"
    exclusive_or_expression: function() {
        var retval = new GLSL_ESParser.exclusive_or_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var and_expression56 = null;


        try {
            // GLSL_ES.g:177:3: ( and_expression )
            // GLSL_ES.g:177:5: and_expression
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_and_expression_in_exclusive_or_expression706);
            and_expression56=this.and_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, and_expression56.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    inclusive_or_expression_return: (function() {
        GLSL_ESParser.inclusive_or_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.inclusive_or_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:181:1: inclusive_or_expression : exclusive_or_expression ;
    // $ANTLR start "inclusive_or_expression"
    inclusive_or_expression: function() {
        var retval = new GLSL_ESParser.inclusive_or_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var exclusive_or_expression57 = null;


        try {
            // GLSL_ES.g:182:3: ( exclusive_or_expression )
            // GLSL_ES.g:182:5: exclusive_or_expression
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_exclusive_or_expression_in_inclusive_or_expression720);
            exclusive_or_expression57=this.exclusive_or_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, exclusive_or_expression57.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logical_and_expression_return: (function() {
        GLSL_ESParser.logical_and_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.logical_and_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:186:1: logical_and_expression : inclusive_or_expression ( AND_OP inclusive_or_expression )* ;
    // $ANTLR start "logical_and_expression"
    logical_and_expression: function() {
        var retval = new GLSL_ESParser.logical_and_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var AND_OP59 = null;
         var inclusive_or_expression58 = null;
         var inclusive_or_expression60 = null;

        var AND_OP59_tree=null;

        try {
            // GLSL_ES.g:187:3: ( inclusive_or_expression ( AND_OP inclusive_or_expression )* )
            // GLSL_ES.g:187:5: inclusive_or_expression ( AND_OP inclusive_or_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_inclusive_or_expression_in_logical_and_expression734);
            inclusive_or_expression58=this.inclusive_or_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, inclusive_or_expression58.getTree());
            // GLSL_ES.g:187:29: ( AND_OP inclusive_or_expression )*
            loop13:
            do {
                var alt13=2;
                var LA13_0 = this.input.LA(1);

                if ( (LA13_0==AND_OP) ) {
                    alt13=1;
                }


                switch (alt13) {
                case 1 :
                    // GLSL_ES.g:187:30: AND_OP inclusive_or_expression
                    AND_OP59=this.match(this.input,AND_OP,GLSL_ESParser.FOLLOW_AND_OP_in_logical_and_expression737); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    AND_OP59_tree = this.adaptor.create(AND_OP59);
                    this.adaptor.addChild(root_0, AND_OP59_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_inclusive_or_expression_in_logical_and_expression739);
                    inclusive_or_expression60=this.inclusive_or_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, inclusive_or_expression60.getTree());


                    break;

                default :
                    break loop13;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logical_xor_expression_return: (function() {
        GLSL_ESParser.logical_xor_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.logical_xor_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:190:1: logical_xor_expression : logical_and_expression ( XOR_OP logical_and_expression )* ;
    // $ANTLR start "logical_xor_expression"
    logical_xor_expression: function() {
        var retval = new GLSL_ESParser.logical_xor_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var XOR_OP62 = null;
         var logical_and_expression61 = null;
         var logical_and_expression63 = null;

        var XOR_OP62_tree=null;

        try {
            // GLSL_ES.g:191:3: ( logical_and_expression ( XOR_OP logical_and_expression )* )
            // GLSL_ES.g:191:5: logical_and_expression ( XOR_OP logical_and_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_logical_and_expression_in_logical_xor_expression754);
            logical_and_expression61=this.logical_and_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_and_expression61.getTree());
            // GLSL_ES.g:191:28: ( XOR_OP logical_and_expression )*
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( (LA14_0==XOR_OP) ) {
                    alt14=1;
                }


                switch (alt14) {
                case 1 :
                    // GLSL_ES.g:191:29: XOR_OP logical_and_expression
                    XOR_OP62=this.match(this.input,XOR_OP,GLSL_ESParser.FOLLOW_XOR_OP_in_logical_xor_expression757); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    XOR_OP62_tree = this.adaptor.create(XOR_OP62);
                    this.adaptor.addChild(root_0, XOR_OP62_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_logical_and_expression_in_logical_xor_expression759);
                    logical_and_expression63=this.logical_and_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_and_expression63.getTree());


                    break;

                default :
                    break loop14;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    logical_or_expression_return: (function() {
        GLSL_ESParser.logical_or_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.logical_or_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:194:1: logical_or_expression : logical_xor_expression ( OR_OP logical_xor_expression )* ;
    // $ANTLR start "logical_or_expression"
    logical_or_expression: function() {
        var retval = new GLSL_ESParser.logical_or_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var OR_OP65 = null;
         var logical_xor_expression64 = null;
         var logical_xor_expression66 = null;

        var OR_OP65_tree=null;

        try {
            // GLSL_ES.g:195:3: ( logical_xor_expression ( OR_OP logical_xor_expression )* )
            // GLSL_ES.g:195:5: logical_xor_expression ( OR_OP logical_xor_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_logical_xor_expression_in_logical_or_expression774);
            logical_xor_expression64=this.logical_xor_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_xor_expression64.getTree());
            // GLSL_ES.g:195:28: ( OR_OP logical_xor_expression )*
            loop15:
            do {
                var alt15=2;
                var LA15_0 = this.input.LA(1);

                if ( (LA15_0==OR_OP) ) {
                    alt15=1;
                }


                switch (alt15) {
                case 1 :
                    // GLSL_ES.g:195:29: OR_OP logical_xor_expression
                    OR_OP65=this.match(this.input,OR_OP,GLSL_ESParser.FOLLOW_OR_OP_in_logical_or_expression777); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    OR_OP65_tree = this.adaptor.create(OR_OP65);
                    this.adaptor.addChild(root_0, OR_OP65_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_logical_xor_expression_in_logical_or_expression779);
                    logical_xor_expression66=this.logical_xor_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_xor_expression66.getTree());


                    break;

                default :
                    break loop15;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    conditional_expression_return: (function() {
        GLSL_ESParser.conditional_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.conditional_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:198:1: conditional_expression : logical_or_expression ( QUESTION expression COLON assignment_expression )? ;
    // $ANTLR start "conditional_expression"
    conditional_expression: function() {
        var retval = new GLSL_ESParser.conditional_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var QUESTION68 = null;
        var COLON70 = null;
         var logical_or_expression67 = null;
         var expression69 = null;
         var assignment_expression71 = null;

        var QUESTION68_tree=null;
        var COLON70_tree=null;

        try {
            // GLSL_ES.g:199:3: ( logical_or_expression ( QUESTION expression COLON assignment_expression )? )
            // GLSL_ES.g:199:5: logical_or_expression ( QUESTION expression COLON assignment_expression )?
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_logical_or_expression_in_conditional_expression794);
            logical_or_expression67=this.logical_or_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, logical_or_expression67.getTree());
            // GLSL_ES.g:199:27: ( QUESTION expression COLON assignment_expression )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0==QUESTION) ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // GLSL_ES.g:199:28: QUESTION expression COLON assignment_expression
                    QUESTION68=this.match(this.input,QUESTION,GLSL_ESParser.FOLLOW_QUESTION_in_conditional_expression797); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    QUESTION68_tree = this.adaptor.create(QUESTION68);
                    this.adaptor.addChild(root_0, QUESTION68_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_conditional_expression799);
                    expression69=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression69.getTree());
                    COLON70=this.match(this.input,COLON,GLSL_ESParser.FOLLOW_COLON_in_conditional_expression801); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    COLON70_tree = this.adaptor.create(COLON70);
                    this.adaptor.addChild(root_0, COLON70_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_assignment_expression_in_conditional_expression803);
                    assignment_expression71=this.assignment_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression71.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assignment_expression_return: (function() {
        GLSL_ESParser.assignment_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.assignment_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:202:1: assignment_expression : ( ( unary_expression assignment_operator )=> unary_expression assignment_operator assignment_expression | conditional_expression );
    // $ANTLR start "assignment_expression"
    assignment_expression: function() {
        var retval = new GLSL_ESParser.assignment_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var unary_expression72 = null;
         var assignment_operator73 = null;
         var assignment_expression74 = null;
         var conditional_expression75 = null;


        try {
            // GLSL_ES.g:203:3: ( ( unary_expression assignment_operator )=> unary_expression assignment_operator assignment_expression | conditional_expression )
            var alt17=2;
            alt17 = this.dfa17.predict(this.input);
            switch (alt17) {
                case 1 :
                    // GLSL_ES.g:203:5: ( unary_expression assignment_operator )=> unary_expression assignment_operator assignment_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_unary_expression_in_assignment_expression826);
                    unary_expression72=this.unary_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, unary_expression72.getTree());
                    this.pushFollow(GLSL_ESParser.FOLLOW_assignment_operator_in_assignment_expression828);
                    assignment_operator73=this.assignment_operator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_operator73.getTree());
                    this.pushFollow(GLSL_ESParser.FOLLOW_assignment_expression_in_assignment_expression830);
                    assignment_expression74=this.assignment_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression74.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:204:5: conditional_expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_conditional_expression_in_assignment_expression836);
                    conditional_expression75=this.conditional_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, conditional_expression75.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    assignment_operator_return: (function() {
        GLSL_ESParser.assignment_operator_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.assignment_operator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:207:1: assignment_operator : ( EQUAL | MUL_ASSIGN | DIV_ASSIGN | ADD_ASSIGN | SUB_ASSIGN );
    // $ANTLR start "assignment_operator"
    assignment_operator: function() {
        var retval = new GLSL_ESParser.assignment_operator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set76 = null;

        var set76_tree=null;

        try {
            // GLSL_ES.g:208:3: ( EQUAL | MUL_ASSIGN | DIV_ASSIGN | ADD_ASSIGN | SUB_ASSIGN )
            // GLSL_ES.g:
            root_0 = this.adaptor.nil();

            set76=this.input.LT(1);
            if ( (this.input.LA(1)>=EQUAL && this.input.LA(1)<=SUB_ASSIGN) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set76));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expression_return: (function() {
        GLSL_ESParser.expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:221:1: expression : assignment_expression ( COMMA assignment_expression )* ;
    // $ANTLR start "expression"
    expression: function() {
        var retval = new GLSL_ESParser.expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var COMMA78 = null;
         var assignment_expression77 = null;
         var assignment_expression79 = null;

        var COMMA78_tree=null;

        try {
            // GLSL_ES.g:222:3: ( assignment_expression ( COMMA assignment_expression )* )
            // GLSL_ES.g:222:5: assignment_expression ( COMMA assignment_expression )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_assignment_expression_in_expression892);
            assignment_expression77=this.assignment_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression77.getTree());
            // GLSL_ES.g:222:27: ( COMMA assignment_expression )*
            loop18:
            do {
                var alt18=2;
                var LA18_0 = this.input.LA(1);

                if ( (LA18_0==COMMA) ) {
                    alt18=1;
                }


                switch (alt18) {
                case 1 :
                    // GLSL_ES.g:222:28: COMMA assignment_expression
                    COMMA78=this.match(this.input,COMMA,GLSL_ESParser.FOLLOW_COMMA_in_expression895); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    COMMA78_tree = this.adaptor.create(COMMA78);
                    this.adaptor.addChild(root_0, COMMA78_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_assignment_expression_in_expression897);
                    assignment_expression79=this.assignment_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression79.getTree());


                    break;

                default :
                    break loop18;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    constant_expression_return: (function() {
        GLSL_ESParser.constant_expression_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.constant_expression_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:225:1: constant_expression : conditional_expression ;
    // $ANTLR start "constant_expression"
    constant_expression: function() {
        var retval = new GLSL_ESParser.constant_expression_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var conditional_expression80 = null;


        try {
            // GLSL_ES.g:226:3: ( conditional_expression )
            // GLSL_ES.g:226:5: conditional_expression
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_conditional_expression_in_constant_expression912);
            conditional_expression80=this.conditional_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, conditional_expression80.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    declaration_return: (function() {
        GLSL_ESParser.declaration_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:229:1: declaration : ( ( function_header )=> function_prototype SEMICOLON | init_declarator_list SEMICOLON | PRECISION precision_qualifier type_specifier_no_prec SEMICOLON );
    // $ANTLR start "declaration"
    declaration: function() {
        var retval = new GLSL_ESParser.declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var SEMICOLON82 = null;
        var SEMICOLON84 = null;
        var PRECISION85 = null;
        var SEMICOLON88 = null;
         var function_prototype81 = null;
         var init_declarator_list83 = null;
         var precision_qualifier86 = null;
         var type_specifier_no_prec87 = null;

        var SEMICOLON82_tree=null;
        var SEMICOLON84_tree=null;
        var PRECISION85_tree=null;
        var SEMICOLON88_tree=null;

        try {
            // GLSL_ES.g:230:3: ( ( function_header )=> function_prototype SEMICOLON | init_declarator_list SEMICOLON | PRECISION precision_qualifier type_specifier_no_prec SEMICOLON )
            var alt19=3;
            alt19 = this.dfa19.predict(this.input);
            switch (alt19) {
                case 1 :
                    // GLSL_ES.g:230:5: ( function_header )=> function_prototype SEMICOLON
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_function_prototype_in_declaration931);
                    function_prototype81=this.function_prototype();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_prototype81.getTree());
                    SEMICOLON82=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_declaration933); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SEMICOLON82_tree = this.adaptor.create(SEMICOLON82);
                    this.adaptor.addChild(root_0, SEMICOLON82_tree);
                    }


                    break;
                case 2 :
                    // GLSL_ES.g:231:5: init_declarator_list SEMICOLON
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_init_declarator_list_in_declaration939);
                    init_declarator_list83=this.init_declarator_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, init_declarator_list83.getTree());
                    SEMICOLON84=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_declaration941); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SEMICOLON84_tree = this.adaptor.create(SEMICOLON84);
                    this.adaptor.addChild(root_0, SEMICOLON84_tree);
                    }


                    break;
                case 3 :
                    // GLSL_ES.g:232:5: PRECISION precision_qualifier type_specifier_no_prec SEMICOLON
                    root_0 = this.adaptor.nil();

                    PRECISION85=this.match(this.input,PRECISION,GLSL_ESParser.FOLLOW_PRECISION_in_declaration947); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    PRECISION85_tree = this.adaptor.create(PRECISION85);
                    this.adaptor.addChild(root_0, PRECISION85_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_precision_qualifier_in_declaration949);
                    precision_qualifier86=this.precision_qualifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, precision_qualifier86.getTree());
                    this.pushFollow(GLSL_ESParser.FOLLOW_type_specifier_no_prec_in_declaration951);
                    type_specifier_no_prec87=this.type_specifier_no_prec();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier_no_prec87.getTree());
                    SEMICOLON88=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_declaration953); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SEMICOLON88_tree = this.adaptor.create(SEMICOLON88);
                    this.adaptor.addChild(root_0, SEMICOLON88_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_prototype_return: (function() {
        GLSL_ESParser.function_prototype_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.function_prototype_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:235:1: function_prototype : function_declarator RIGHT_PAREN ;
    // $ANTLR start "function_prototype"
    function_prototype: function() {
        var retval = new GLSL_ESParser.function_prototype_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var RIGHT_PAREN90 = null;
         var function_declarator89 = null;

        var RIGHT_PAREN90_tree=null;

        try {
            // GLSL_ES.g:236:3: ( function_declarator RIGHT_PAREN )
            // GLSL_ES.g:236:5: function_declarator RIGHT_PAREN
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_function_declarator_in_function_prototype966);
            function_declarator89=this.function_declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_declarator89.getTree());
            RIGHT_PAREN90=this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_function_prototype968); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            RIGHT_PAREN90_tree = this.adaptor.create(RIGHT_PAREN90);
            this.adaptor.addChild(root_0, RIGHT_PAREN90_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_declarator_return: (function() {
        GLSL_ESParser.function_declarator_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.function_declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:239:1: function_declarator : function_header ( parameter_declaration ( COMMA parameter_declaration )* )? ;
    // $ANTLR start "function_declarator"
    function_declarator: function() {
        var retval = new GLSL_ESParser.function_declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var COMMA93 = null;
         var function_header91 = null;
         var parameter_declaration92 = null;
         var parameter_declaration94 = null;

        var COMMA93_tree=null;

        try {
            // GLSL_ES.g:240:3: ( function_header ( parameter_declaration ( COMMA parameter_declaration )* )? )
            // GLSL_ES.g:240:5: function_header ( parameter_declaration ( COMMA parameter_declaration )* )?
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_function_header_in_function_declarator981);
            function_header91=this.function_header();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_header91.getTree());
            // GLSL_ES.g:240:21: ( parameter_declaration ( COMMA parameter_declaration )* )?
            var alt21=2;
            var LA21_0 = this.input.LA(1);

            if ( (LA21_0==IDENTIFIER||LA21_0==VOID||(LA21_0>=FLOAT && LA21_0<=MAT4)||(LA21_0>=IN && LA21_0<=STRUCT)) ) {
                alt21=1;
            }
            switch (alt21) {
                case 1 :
                    // GLSL_ES.g:240:22: parameter_declaration ( COMMA parameter_declaration )*
                    this.pushFollow(GLSL_ESParser.FOLLOW_parameter_declaration_in_function_declarator984);
                    parameter_declaration92=this.parameter_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_declaration92.getTree());
                    // GLSL_ES.g:240:44: ( COMMA parameter_declaration )*
                    loop20:
                    do {
                        var alt20=2;
                        var LA20_0 = this.input.LA(1);

                        if ( (LA20_0==COMMA) ) {
                            alt20=1;
                        }


                        switch (alt20) {
                        case 1 :
                            // GLSL_ES.g:240:45: COMMA parameter_declaration
                            COMMA93=this.match(this.input,COMMA,GLSL_ESParser.FOLLOW_COMMA_in_function_declarator987); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            COMMA93_tree = this.adaptor.create(COMMA93);
                            this.adaptor.addChild(root_0, COMMA93_tree);
                            }
                            this.pushFollow(GLSL_ESParser.FOLLOW_parameter_declaration_in_function_declarator989);
                            parameter_declaration94=this.parameter_declaration();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_declaration94.getTree());


                            break;

                        default :
                            break loop20;
                        }
                    } while (true);



                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_header_return: (function() {
        GLSL_ESParser.function_header_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.function_header_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:243:1: function_header : fully_specified_type IDENTIFIER LEFT_PAREN ;
    // $ANTLR start "function_header"
    function_header: function() {
        var retval = new GLSL_ESParser.function_header_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER96 = null;
        var LEFT_PAREN97 = null;
         var fully_specified_type95 = null;

        var IDENTIFIER96_tree=null;
        var LEFT_PAREN97_tree=null;

        try {
            // GLSL_ES.g:244:3: ( fully_specified_type IDENTIFIER LEFT_PAREN )
            // GLSL_ES.g:244:5: fully_specified_type IDENTIFIER LEFT_PAREN
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_fully_specified_type_in_function_header1007);
            fully_specified_type95=this.fully_specified_type();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, fully_specified_type95.getTree());
            IDENTIFIER96=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_function_header1009); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER96_tree = this.adaptor.create(IDENTIFIER96);
            this.adaptor.addChild(root_0, IDENTIFIER96_tree);
            }
            LEFT_PAREN97=this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_function_header1011); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            LEFT_PAREN97_tree = this.adaptor.create(LEFT_PAREN97);
            this.adaptor.addChild(root_0, LEFT_PAREN97_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    parameter_declaration_return: (function() {
        GLSL_ESParser.parameter_declaration_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.parameter_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:247:1: parameter_declaration : ( type_qualifier )? ( parameter_qualifier )? ( type_specifier ( IDENTIFIER )? ( LEFT_BRACKET constant_expression RIGHT_BRACKET )? ) ;
    // $ANTLR start "parameter_declaration"
    parameter_declaration: function() {
        var retval = new GLSL_ESParser.parameter_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER101 = null;
        var LEFT_BRACKET102 = null;
        var RIGHT_BRACKET104 = null;
         var type_qualifier98 = null;
         var parameter_qualifier99 = null;
         var type_specifier100 = null;
         var constant_expression103 = null;

        var IDENTIFIER101_tree=null;
        var LEFT_BRACKET102_tree=null;
        var RIGHT_BRACKET104_tree=null;

        try {
            // GLSL_ES.g:248:3: ( ( type_qualifier )? ( parameter_qualifier )? ( type_specifier ( IDENTIFIER )? ( LEFT_BRACKET constant_expression RIGHT_BRACKET )? ) )
            // GLSL_ES.g:248:5: ( type_qualifier )? ( parameter_qualifier )? ( type_specifier ( IDENTIFIER )? ( LEFT_BRACKET constant_expression RIGHT_BRACKET )? )
            root_0 = this.adaptor.nil();

            // GLSL_ES.g:248:5: ( type_qualifier )?
            var alt22=2;
            var LA22_0 = this.input.LA(1);

            if ( ((LA22_0>=INVARIANT && LA22_0<=UNIFORM)) ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // GLSL_ES.g:248:6: type_qualifier
                    this.pushFollow(GLSL_ESParser.FOLLOW_type_qualifier_in_parameter_declaration1025);
                    type_qualifier98=this.type_qualifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_qualifier98.getTree());


                    break;

            }

            // GLSL_ES.g:248:23: ( parameter_qualifier )?
            var alt23=2;
            var LA23_0 = this.input.LA(1);

            if ( ((LA23_0>=IN && LA23_0<=INOUT)) ) {
                alt23=1;
            }
            switch (alt23) {
                case 1 :
                    // GLSL_ES.g:248:24: parameter_qualifier
                    this.pushFollow(GLSL_ESParser.FOLLOW_parameter_qualifier_in_parameter_declaration1030);
                    parameter_qualifier99=this.parameter_qualifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, parameter_qualifier99.getTree());


                    break;

            }

            // GLSL_ES.g:249:5: ( type_specifier ( IDENTIFIER )? ( LEFT_BRACKET constant_expression RIGHT_BRACKET )? )
            // GLSL_ES.g:249:7: type_specifier ( IDENTIFIER )? ( LEFT_BRACKET constant_expression RIGHT_BRACKET )?
            this.pushFollow(GLSL_ESParser.FOLLOW_type_specifier_in_parameter_declaration1040);
            type_specifier100=this.type_specifier();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier100.getTree());
            // GLSL_ES.g:251:7: ( IDENTIFIER )?
            var alt24=2;
            var LA24_0 = this.input.LA(1);

            if ( (LA24_0==IDENTIFIER) ) {
                alt24=1;
            }
            switch (alt24) {
                case 1 :
                    // GLSL_ES.g:251:8: IDENTIFIER
                    IDENTIFIER101=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_parameter_declaration1056); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER101_tree = this.adaptor.create(IDENTIFIER101);
                    this.adaptor.addChild(root_0, IDENTIFIER101_tree);
                    }


                    break;

            }

            // GLSL_ES.g:253:7: ( LEFT_BRACKET constant_expression RIGHT_BRACKET )?
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( (LA25_0==LEFT_BRACKET) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // GLSL_ES.g:253:8: LEFT_BRACKET constant_expression RIGHT_BRACKET
                    LEFT_BRACKET102=this.match(this.input,LEFT_BRACKET,GLSL_ESParser.FOLLOW_LEFT_BRACKET_in_parameter_declaration1074); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_BRACKET102_tree = this.adaptor.create(LEFT_BRACKET102);
                    this.adaptor.addChild(root_0, LEFT_BRACKET102_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_constant_expression_in_parameter_declaration1076);
                    constant_expression103=this.constant_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression103.getTree());
                    RIGHT_BRACKET104=this.match(this.input,RIGHT_BRACKET,GLSL_ESParser.FOLLOW_RIGHT_BRACKET_in_parameter_declaration1078); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_BRACKET104_tree = this.adaptor.create(RIGHT_BRACKET104);
                    this.adaptor.addChild(root_0, RIGHT_BRACKET104_tree);
                    }


                    break;

            }







            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    parameter_qualifier_return: (function() {
        GLSL_ESParser.parameter_qualifier_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.parameter_qualifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:259:1: parameter_qualifier : ( IN | OUT | INOUT );
    // $ANTLR start "parameter_qualifier"
    parameter_qualifier: function() {
        var retval = new GLSL_ESParser.parameter_qualifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set105 = null;

        var set105_tree=null;

        try {
            // GLSL_ES.g:260:3: ( IN | OUT | INOUT )
            // GLSL_ES.g:
            root_0 = this.adaptor.nil();

            set105=this.input.LT(1);
            if ( (this.input.LA(1)>=IN && this.input.LA(1)<=INOUT) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set105));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    init_declarator_list_return: (function() {
        GLSL_ESParser.init_declarator_list_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.init_declarator_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:265:1: init_declarator_list : single_declaration ( init_declarator_list_1 )* ;
    // $ANTLR start "init_declarator_list"
    init_declarator_list: function() {
        var retval = new GLSL_ESParser.init_declarator_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var single_declaration106 = null;
         var init_declarator_list_1107 = null;


        try {
            // GLSL_ES.g:266:3: ( single_declaration ( init_declarator_list_1 )* )
            // GLSL_ES.g:266:5: single_declaration ( init_declarator_list_1 )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_single_declaration_in_init_declarator_list1126);
            single_declaration106=this.single_declaration();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, single_declaration106.getTree());
            // GLSL_ES.g:266:24: ( init_declarator_list_1 )*
            loop26:
            do {
                var alt26=2;
                var LA26_0 = this.input.LA(1);

                if ( (LA26_0==COMMA) ) {
                    alt26=1;
                }


                switch (alt26) {
                case 1 :
                    // GLSL_ES.g:266:25: init_declarator_list_1
                    this.pushFollow(GLSL_ESParser.FOLLOW_init_declarator_list_1_in_init_declarator_list1129);
                    init_declarator_list_1107=this.init_declarator_list_1();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, init_declarator_list_1107.getTree());


                    break;

                default :
                    break loop26;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    init_declarator_list_1_return: (function() {
        GLSL_ESParser.init_declarator_list_1_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.init_declarator_list_1_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:269:1: init_declarator_list_1 : COMMA IDENTIFIER ( init_declarator_list_2 )? ;
    // $ANTLR start "init_declarator_list_1"
    init_declarator_list_1: function() {
        var retval = new GLSL_ESParser.init_declarator_list_1_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var COMMA108 = null;
        var IDENTIFIER109 = null;
         var init_declarator_list_2110 = null;

        var COMMA108_tree=null;
        var IDENTIFIER109_tree=null;

        try {
            // GLSL_ES.g:270:3: ( COMMA IDENTIFIER ( init_declarator_list_2 )? )
            // GLSL_ES.g:270:5: COMMA IDENTIFIER ( init_declarator_list_2 )?
            root_0 = this.adaptor.nil();

            COMMA108=this.match(this.input,COMMA,GLSL_ESParser.FOLLOW_COMMA_in_init_declarator_list_11144); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            COMMA108_tree = this.adaptor.create(COMMA108);
            this.adaptor.addChild(root_0, COMMA108_tree);
            }
            IDENTIFIER109=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_init_declarator_list_11146); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER109_tree = this.adaptor.create(IDENTIFIER109);
            this.adaptor.addChild(root_0, IDENTIFIER109_tree);
            }
            // GLSL_ES.g:270:22: ( init_declarator_list_2 )?
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0==LEFT_BRACKET||LA27_0==EQUAL) ) {
                alt27=1;
            }
            switch (alt27) {
                case 1 :
                    // GLSL_ES.g:270:23: init_declarator_list_2
                    this.pushFollow(GLSL_ESParser.FOLLOW_init_declarator_list_2_in_init_declarator_list_11149);
                    init_declarator_list_2110=this.init_declarator_list_2();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, init_declarator_list_2110.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    init_declarator_list_2_return: (function() {
        GLSL_ESParser.init_declarator_list_2_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.init_declarator_list_2_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:273:1: init_declarator_list_2 : ( LEFT_BRACKET constant_expression RIGHT_BRACKET | EQUAL initializer );
    // $ANTLR start "init_declarator_list_2"
    init_declarator_list_2: function() {
        var retval = new GLSL_ESParser.init_declarator_list_2_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LEFT_BRACKET111 = null;
        var RIGHT_BRACKET113 = null;
        var EQUAL114 = null;
         var constant_expression112 = null;
         var initializer115 = null;

        var LEFT_BRACKET111_tree=null;
        var RIGHT_BRACKET113_tree=null;
        var EQUAL114_tree=null;

        try {
            // GLSL_ES.g:274:3: ( LEFT_BRACKET constant_expression RIGHT_BRACKET | EQUAL initializer )
            var alt28=2;
            var LA28_0 = this.input.LA(1);

            if ( (LA28_0==LEFT_BRACKET) ) {
                alt28=1;
            }
            else if ( (LA28_0==EQUAL) ) {
                alt28=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 28, 0, this.input);

                throw nvae;
            }
            switch (alt28) {
                case 1 :
                    // GLSL_ES.g:274:5: LEFT_BRACKET constant_expression RIGHT_BRACKET
                    root_0 = this.adaptor.nil();

                    LEFT_BRACKET111=this.match(this.input,LEFT_BRACKET,GLSL_ESParser.FOLLOW_LEFT_BRACKET_in_init_declarator_list_21164); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_BRACKET111_tree = this.adaptor.create(LEFT_BRACKET111);
                    this.adaptor.addChild(root_0, LEFT_BRACKET111_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_constant_expression_in_init_declarator_list_21166);
                    constant_expression112=this.constant_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression112.getTree());
                    RIGHT_BRACKET113=this.match(this.input,RIGHT_BRACKET,GLSL_ESParser.FOLLOW_RIGHT_BRACKET_in_init_declarator_list_21168); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_BRACKET113_tree = this.adaptor.create(RIGHT_BRACKET113);
                    this.adaptor.addChild(root_0, RIGHT_BRACKET113_tree);
                    }


                    break;
                case 2 :
                    // GLSL_ES.g:275:5: EQUAL initializer
                    root_0 = this.adaptor.nil();

                    EQUAL114=this.match(this.input,EQUAL,GLSL_ESParser.FOLLOW_EQUAL_in_init_declarator_list_21174); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    EQUAL114_tree = this.adaptor.create(EQUAL114);
                    this.adaptor.addChild(root_0, EQUAL114_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_initializer_in_init_declarator_list_21176);
                    initializer115=this.initializer();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, initializer115.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    single_declaration_return: (function() {
        GLSL_ESParser.single_declaration_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.single_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:278:1: single_declaration : ( fully_specified_type ( IDENTIFIER ( LEFT_BRACKET constant_expression RIGHT_BRACKET | EQUAL initializer )? )? | INVARIANT IDENTIFIER );
    // $ANTLR start "single_declaration"
    single_declaration: function() {
        var retval = new GLSL_ESParser.single_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER117 = null;
        var LEFT_BRACKET118 = null;
        var RIGHT_BRACKET120 = null;
        var EQUAL121 = null;
        var INVARIANT123 = null;
        var IDENTIFIER124 = null;
         var fully_specified_type116 = null;
         var constant_expression119 = null;
         var initializer122 = null;

        var IDENTIFIER117_tree=null;
        var LEFT_BRACKET118_tree=null;
        var RIGHT_BRACKET120_tree=null;
        var EQUAL121_tree=null;
        var INVARIANT123_tree=null;
        var IDENTIFIER124_tree=null;

        try {
            // GLSL_ES.g:279:3: ( fully_specified_type ( IDENTIFIER ( LEFT_BRACKET constant_expression RIGHT_BRACKET | EQUAL initializer )? )? | INVARIANT IDENTIFIER )
            var alt31=2;
            var LA31_0 = this.input.LA(1);

            if ( (LA31_0==IDENTIFIER||LA31_0==VOID||(LA31_0>=FLOAT && LA31_0<=MAT4)||(LA31_0>=CONST && LA31_0<=STRUCT)) ) {
                alt31=1;
            }
            else if ( (LA31_0==INVARIANT) ) {
                var LA31_2 = this.input.LA(2);

                if ( (LA31_2==VARYING) ) {
                    alt31=1;
                }
                else if ( (LA31_2==IDENTIFIER) ) {
                    alt31=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 31, 2, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 31, 0, this.input);

                throw nvae;
            }
            switch (alt31) {
                case 1 :
                    // GLSL_ES.g:279:5: fully_specified_type ( IDENTIFIER ( LEFT_BRACKET constant_expression RIGHT_BRACKET | EQUAL initializer )? )?
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_fully_specified_type_in_single_declaration1189);
                    fully_specified_type116=this.fully_specified_type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(fully_specified_type116.getTree(), root_0);
                    // GLSL_ES.g:280:5: ( IDENTIFIER ( LEFT_BRACKET constant_expression RIGHT_BRACKET | EQUAL initializer )? )?
                    var alt30=2;
                    var LA30_0 = this.input.LA(1);

                    if ( (LA30_0==IDENTIFIER) ) {
                        alt30=1;
                    }
                    switch (alt30) {
                        case 1 :
                            // GLSL_ES.g:280:7: IDENTIFIER ( LEFT_BRACKET constant_expression RIGHT_BRACKET | EQUAL initializer )?
                            IDENTIFIER117=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_single_declaration1198); if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) {
                            IDENTIFIER117_tree = this.adaptor.create(IDENTIFIER117);
                            this.adaptor.addChild(root_0, IDENTIFIER117_tree);
                            }
                            // GLSL_ES.g:281:7: ( LEFT_BRACKET constant_expression RIGHT_BRACKET | EQUAL initializer )?
                            var alt29=3;
                            var LA29_0 = this.input.LA(1);

                            if ( (LA29_0==LEFT_BRACKET) ) {
                                alt29=1;
                            }
                            else if ( (LA29_0==EQUAL) ) {
                                alt29=2;
                            }
                            switch (alt29) {
                                case 1 :
                                    // GLSL_ES.g:281:11: LEFT_BRACKET constant_expression RIGHT_BRACKET
                                    LEFT_BRACKET118=this.match(this.input,LEFT_BRACKET,GLSL_ESParser.FOLLOW_LEFT_BRACKET_in_single_declaration1210); if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) {
                                    LEFT_BRACKET118_tree = this.adaptor.create(LEFT_BRACKET118);
                                    this.adaptor.addChild(root_0, LEFT_BRACKET118_tree);
                                    }
                                    this.pushFollow(GLSL_ESParser.FOLLOW_constant_expression_in_single_declaration1212);
                                    constant_expression119=this.constant_expression();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression119.getTree());
                                    RIGHT_BRACKET120=this.match(this.input,RIGHT_BRACKET,GLSL_ESParser.FOLLOW_RIGHT_BRACKET_in_single_declaration1214); if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) {
                                    RIGHT_BRACKET120_tree = this.adaptor.create(RIGHT_BRACKET120);
                                    this.adaptor.addChild(root_0, RIGHT_BRACKET120_tree);
                                    }


                                    break;
                                case 2 :
                                    // GLSL_ES.g:282:11: EQUAL initializer
                                    EQUAL121=this.match(this.input,EQUAL,GLSL_ESParser.FOLLOW_EQUAL_in_single_declaration1226); if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) {
                                    EQUAL121_tree = this.adaptor.create(EQUAL121);
                                    this.adaptor.addChild(root_0, EQUAL121_tree);
                                    }
                                    this.pushFollow(GLSL_ESParser.FOLLOW_initializer_in_single_declaration1228);
                                    initializer122=this.initializer();

                                    this.state._fsp--;
                                    if (this.state.failed) return retval;
                                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, initializer122.getTree());


                                    break;

                            }



                            break;

                    }



                    break;
                case 2 :
                    // GLSL_ES.g:285:5: INVARIANT IDENTIFIER
                    root_0 = this.adaptor.nil();

                    INVARIANT123=this.match(this.input,INVARIANT,GLSL_ESParser.FOLLOW_INVARIANT_in_single_declaration1252); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    INVARIANT123_tree = this.adaptor.create(INVARIANT123);
                    this.adaptor.addChild(root_0, INVARIANT123_tree);
                    }
                    IDENTIFIER124=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_single_declaration1254); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER124_tree = this.adaptor.create(IDENTIFIER124);
                    this.adaptor.addChild(root_0, IDENTIFIER124_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    fully_specified_type_return: (function() {
        GLSL_ESParser.fully_specified_type_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.fully_specified_type_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:290:1: fully_specified_type : ( type_specifier | type_qualifier type_specifier );
    // $ANTLR start "fully_specified_type"
    fully_specified_type: function() {
        var retval = new GLSL_ESParser.fully_specified_type_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var type_specifier125 = null;
         var type_qualifier126 = null;
         var type_specifier127 = null;


        try {
            // GLSL_ES.g:291:3: ( type_specifier | type_qualifier type_specifier )
            var alt32=2;
            var LA32_0 = this.input.LA(1);

            if ( (LA32_0==IDENTIFIER||LA32_0==VOID||(LA32_0>=FLOAT && LA32_0<=MAT4)||(LA32_0>=SAMPLER2D && LA32_0<=STRUCT)) ) {
                alt32=1;
            }
            else if ( ((LA32_0>=INVARIANT && LA32_0<=UNIFORM)) ) {
                alt32=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 32, 0, this.input);

                throw nvae;
            }
            switch (alt32) {
                case 1 :
                    // GLSL_ES.g:291:5: type_specifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_type_specifier_in_fully_specified_type1272);
                    type_specifier125=this.type_specifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier125.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:292:5: type_qualifier type_specifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_type_qualifier_in_fully_specified_type1278);
                    type_qualifier126=this.type_qualifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) root_0 = this.adaptor.becomeRoot(type_qualifier126.getTree(), root_0);
                    this.pushFollow(GLSL_ESParser.FOLLOW_type_specifier_in_fully_specified_type1281);
                    type_specifier127=this.type_specifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier127.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    type_qualifier_return: (function() {
        GLSL_ESParser.type_qualifier_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.type_qualifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:295:1: type_qualifier : ( CONST | ATTRIBUTE | VARYING | INVARIANT VARYING | UNIFORM );
    // $ANTLR start "type_qualifier"
    type_qualifier: function() {
        var retval = new GLSL_ESParser.type_qualifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var CONST128 = null;
        var ATTRIBUTE129 = null;
        var VARYING130 = null;
        var INVARIANT131 = null;
        var VARYING132 = null;
        var UNIFORM133 = null;

        var CONST128_tree=null;
        var ATTRIBUTE129_tree=null;
        var VARYING130_tree=null;
        var INVARIANT131_tree=null;
        var VARYING132_tree=null;
        var UNIFORM133_tree=null;

        try {
            // GLSL_ES.g:296:3: ( CONST | ATTRIBUTE | VARYING | INVARIANT VARYING | UNIFORM )
            var alt33=5;
            switch ( this.input.LA(1) ) {
            case CONST:
                alt33=1;
                break;
            case ATTRIBUTE:
                alt33=2;
                break;
            case VARYING:
                alt33=3;
                break;
            case INVARIANT:
                alt33=4;
                break;
            case UNIFORM:
                alt33=5;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 33, 0, this.input);

                throw nvae;
            }

            switch (alt33) {
                case 1 :
                    // GLSL_ES.g:296:5: CONST
                    root_0 = this.adaptor.nil();

                    CONST128=this.match(this.input,CONST,GLSL_ESParser.FOLLOW_CONST_in_type_qualifier1294); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    CONST128_tree = this.adaptor.create(CONST128);
                    this.adaptor.addChild(root_0, CONST128_tree);
                    }


                    break;
                case 2 :
                    // GLSL_ES.g:297:5: ATTRIBUTE
                    root_0 = this.adaptor.nil();

                    ATTRIBUTE129=this.match(this.input,ATTRIBUTE,GLSL_ESParser.FOLLOW_ATTRIBUTE_in_type_qualifier1300); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    ATTRIBUTE129_tree = this.adaptor.create(ATTRIBUTE129);
                    this.adaptor.addChild(root_0, ATTRIBUTE129_tree);
                    }


                    break;
                case 3 :
                    // GLSL_ES.g:298:5: VARYING
                    root_0 = this.adaptor.nil();

                    VARYING130=this.match(this.input,VARYING,GLSL_ESParser.FOLLOW_VARYING_in_type_qualifier1309); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    VARYING130_tree = this.adaptor.create(VARYING130);
                    this.adaptor.addChild(root_0, VARYING130_tree);
                    }


                    break;
                case 4 :
                    // GLSL_ES.g:299:5: INVARIANT VARYING
                    root_0 = this.adaptor.nil();

                    INVARIANT131=this.match(this.input,INVARIANT,GLSL_ESParser.FOLLOW_INVARIANT_in_type_qualifier1315); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    INVARIANT131_tree = this.adaptor.create(INVARIANT131);
                    this.adaptor.addChild(root_0, INVARIANT131_tree);
                    }
                    VARYING132=this.match(this.input,VARYING,GLSL_ESParser.FOLLOW_VARYING_in_type_qualifier1317); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    VARYING132_tree = this.adaptor.create(VARYING132);
                    this.adaptor.addChild(root_0, VARYING132_tree);
                    }


                    break;
                case 5 :
                    // GLSL_ES.g:300:5: UNIFORM
                    root_0 = this.adaptor.nil();

                    UNIFORM133=this.match(this.input,UNIFORM,GLSL_ESParser.FOLLOW_UNIFORM_in_type_qualifier1323); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    UNIFORM133_tree = this.adaptor.create(UNIFORM133);
                    this.adaptor.addChild(root_0, UNIFORM133_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    type_specifier_return: (function() {
        GLSL_ESParser.type_specifier_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.type_specifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:303:1: type_specifier : ( type_specifier_no_prec | precision_qualifier type_specifier_no_prec );
    // $ANTLR start "type_specifier"
    type_specifier: function() {
        var retval = new GLSL_ESParser.type_specifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var type_specifier_no_prec134 = null;
         var precision_qualifier135 = null;
         var type_specifier_no_prec136 = null;


        try {
            // GLSL_ES.g:304:3: ( type_specifier_no_prec | precision_qualifier type_specifier_no_prec )
            var alt34=2;
            var LA34_0 = this.input.LA(1);

            if ( (LA34_0==IDENTIFIER||LA34_0==VOID||(LA34_0>=FLOAT && LA34_0<=MAT4)||(LA34_0>=SAMPLER2D && LA34_0<=SAMPLERCUBE)||LA34_0==STRUCT) ) {
                alt34=1;
            }
            else if ( ((LA34_0>=HIGH_PRECISION && LA34_0<=LOW_PRECISION)) ) {
                alt34=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 34, 0, this.input);

                throw nvae;
            }
            switch (alt34) {
                case 1 :
                    // GLSL_ES.g:304:5: type_specifier_no_prec
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_type_specifier_no_prec_in_type_specifier1336);
                    type_specifier_no_prec134=this.type_specifier_no_prec();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier_no_prec134.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:305:5: precision_qualifier type_specifier_no_prec
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_precision_qualifier_in_type_specifier1342);
                    precision_qualifier135=this.precision_qualifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, precision_qualifier135.getTree());
                    this.pushFollow(GLSL_ESParser.FOLLOW_type_specifier_no_prec_in_type_specifier1344);
                    type_specifier_no_prec136=this.type_specifier_no_prec();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier_no_prec136.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    type_specifier_no_prec_return: (function() {
        GLSL_ESParser.type_specifier_no_prec_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.type_specifier_no_prec_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:308:1: type_specifier_no_prec : ( VOID | FLOAT | INT | BOOL | VEC2 | VEC3 | VEC4 | BVEC2 | BVEC3 | BVEC4 | IVEC2 | IVEC3 | IVEC4 | MAT2 | MAT3 | MAT4 | SAMPLER2D | SAMPLERCUBE | struct_specifier | IDENTIFIER );
    // $ANTLR start "type_specifier_no_prec"
    type_specifier_no_prec: function() {
        var retval = new GLSL_ESParser.type_specifier_no_prec_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var VOID137 = null;
        var FLOAT138 = null;
        var INT139 = null;
        var BOOL140 = null;
        var VEC2141 = null;
        var VEC3142 = null;
        var VEC4143 = null;
        var BVEC2144 = null;
        var BVEC3145 = null;
        var BVEC4146 = null;
        var IVEC2147 = null;
        var IVEC3148 = null;
        var IVEC4149 = null;
        var MAT2150 = null;
        var MAT3151 = null;
        var MAT4152 = null;
        var SAMPLER2D153 = null;
        var SAMPLERCUBE154 = null;
        var IDENTIFIER156 = null;
         var struct_specifier155 = null;

        var VOID137_tree=null;
        var FLOAT138_tree=null;
        var INT139_tree=null;
        var BOOL140_tree=null;
        var VEC2141_tree=null;
        var VEC3142_tree=null;
        var VEC4143_tree=null;
        var BVEC2144_tree=null;
        var BVEC3145_tree=null;
        var BVEC4146_tree=null;
        var IVEC2147_tree=null;
        var IVEC3148_tree=null;
        var IVEC4149_tree=null;
        var MAT2150_tree=null;
        var MAT3151_tree=null;
        var MAT4152_tree=null;
        var SAMPLER2D153_tree=null;
        var SAMPLERCUBE154_tree=null;
        var IDENTIFIER156_tree=null;

        try {
            // GLSL_ES.g:309:3: ( VOID | FLOAT | INT | BOOL | VEC2 | VEC3 | VEC4 | BVEC2 | BVEC3 | BVEC4 | IVEC2 | IVEC3 | IVEC4 | MAT2 | MAT3 | MAT4 | SAMPLER2D | SAMPLERCUBE | struct_specifier | IDENTIFIER )
            var alt35=20;
            switch ( this.input.LA(1) ) {
            case VOID:
                alt35=1;
                break;
            case FLOAT:
                alt35=2;
                break;
            case INT:
                alt35=3;
                break;
            case BOOL:
                alt35=4;
                break;
            case VEC2:
                alt35=5;
                break;
            case VEC3:
                alt35=6;
                break;
            case VEC4:
                alt35=7;
                break;
            case BVEC2:
                alt35=8;
                break;
            case BVEC3:
                alt35=9;
                break;
            case BVEC4:
                alt35=10;
                break;
            case IVEC2:
                alt35=11;
                break;
            case IVEC3:
                alt35=12;
                break;
            case IVEC4:
                alt35=13;
                break;
            case MAT2:
                alt35=14;
                break;
            case MAT3:
                alt35=15;
                break;
            case MAT4:
                alt35=16;
                break;
            case SAMPLER2D:
                alt35=17;
                break;
            case SAMPLERCUBE:
                alt35=18;
                break;
            case STRUCT:
                alt35=19;
                break;
            case IDENTIFIER:
                alt35=20;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 35, 0, this.input);

                throw nvae;
            }

            switch (alt35) {
                case 1 :
                    // GLSL_ES.g:309:5: VOID
                    root_0 = this.adaptor.nil();

                    VOID137=this.match(this.input,VOID,GLSL_ESParser.FOLLOW_VOID_in_type_specifier_no_prec1357); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    VOID137_tree = this.adaptor.create(VOID137);
                    this.adaptor.addChild(root_0, VOID137_tree);
                    }


                    break;
                case 2 :
                    // GLSL_ES.g:310:5: FLOAT
                    root_0 = this.adaptor.nil();

                    FLOAT138=this.match(this.input,FLOAT,GLSL_ESParser.FOLLOW_FLOAT_in_type_specifier_no_prec1363); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    FLOAT138_tree = this.adaptor.create(FLOAT138);
                    this.adaptor.addChild(root_0, FLOAT138_tree);
                    }


                    break;
                case 3 :
                    // GLSL_ES.g:311:5: INT
                    root_0 = this.adaptor.nil();

                    INT139=this.match(this.input,INT,GLSL_ESParser.FOLLOW_INT_in_type_specifier_no_prec1369); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    INT139_tree = this.adaptor.create(INT139);
                    this.adaptor.addChild(root_0, INT139_tree);
                    }


                    break;
                case 4 :
                    // GLSL_ES.g:312:5: BOOL
                    root_0 = this.adaptor.nil();

                    BOOL140=this.match(this.input,BOOL,GLSL_ESParser.FOLLOW_BOOL_in_type_specifier_no_prec1375); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    BOOL140_tree = this.adaptor.create(BOOL140);
                    this.adaptor.addChild(root_0, BOOL140_tree);
                    }


                    break;
                case 5 :
                    // GLSL_ES.g:313:5: VEC2
                    root_0 = this.adaptor.nil();

                    VEC2141=this.match(this.input,VEC2,GLSL_ESParser.FOLLOW_VEC2_in_type_specifier_no_prec1381); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    VEC2141_tree = this.adaptor.create(VEC2141);
                    this.adaptor.addChild(root_0, VEC2141_tree);
                    }


                    break;
                case 6 :
                    // GLSL_ES.g:314:5: VEC3
                    root_0 = this.adaptor.nil();

                    VEC3142=this.match(this.input,VEC3,GLSL_ESParser.FOLLOW_VEC3_in_type_specifier_no_prec1387); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    VEC3142_tree = this.adaptor.create(VEC3142);
                    this.adaptor.addChild(root_0, VEC3142_tree);
                    }


                    break;
                case 7 :
                    // GLSL_ES.g:315:5: VEC4
                    root_0 = this.adaptor.nil();

                    VEC4143=this.match(this.input,VEC4,GLSL_ESParser.FOLLOW_VEC4_in_type_specifier_no_prec1393); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    VEC4143_tree = this.adaptor.create(VEC4143);
                    this.adaptor.addChild(root_0, VEC4143_tree);
                    }


                    break;
                case 8 :
                    // GLSL_ES.g:316:5: BVEC2
                    root_0 = this.adaptor.nil();

                    BVEC2144=this.match(this.input,BVEC2,GLSL_ESParser.FOLLOW_BVEC2_in_type_specifier_no_prec1399); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    BVEC2144_tree = this.adaptor.create(BVEC2144);
                    this.adaptor.addChild(root_0, BVEC2144_tree);
                    }


                    break;
                case 9 :
                    // GLSL_ES.g:317:5: BVEC3
                    root_0 = this.adaptor.nil();

                    BVEC3145=this.match(this.input,BVEC3,GLSL_ESParser.FOLLOW_BVEC3_in_type_specifier_no_prec1405); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    BVEC3145_tree = this.adaptor.create(BVEC3145);
                    this.adaptor.addChild(root_0, BVEC3145_tree);
                    }


                    break;
                case 10 :
                    // GLSL_ES.g:318:5: BVEC4
                    root_0 = this.adaptor.nil();

                    BVEC4146=this.match(this.input,BVEC4,GLSL_ESParser.FOLLOW_BVEC4_in_type_specifier_no_prec1411); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    BVEC4146_tree = this.adaptor.create(BVEC4146);
                    this.adaptor.addChild(root_0, BVEC4146_tree);
                    }


                    break;
                case 11 :
                    // GLSL_ES.g:319:5: IVEC2
                    root_0 = this.adaptor.nil();

                    IVEC2147=this.match(this.input,IVEC2,GLSL_ESParser.FOLLOW_IVEC2_in_type_specifier_no_prec1417); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IVEC2147_tree = this.adaptor.create(IVEC2147);
                    this.adaptor.addChild(root_0, IVEC2147_tree);
                    }


                    break;
                case 12 :
                    // GLSL_ES.g:320:5: IVEC3
                    root_0 = this.adaptor.nil();

                    IVEC3148=this.match(this.input,IVEC3,GLSL_ESParser.FOLLOW_IVEC3_in_type_specifier_no_prec1423); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IVEC3148_tree = this.adaptor.create(IVEC3148);
                    this.adaptor.addChild(root_0, IVEC3148_tree);
                    }


                    break;
                case 13 :
                    // GLSL_ES.g:321:5: IVEC4
                    root_0 = this.adaptor.nil();

                    IVEC4149=this.match(this.input,IVEC4,GLSL_ESParser.FOLLOW_IVEC4_in_type_specifier_no_prec1429); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IVEC4149_tree = this.adaptor.create(IVEC4149);
                    this.adaptor.addChild(root_0, IVEC4149_tree);
                    }


                    break;
                case 14 :
                    // GLSL_ES.g:322:5: MAT2
                    root_0 = this.adaptor.nil();

                    MAT2150=this.match(this.input,MAT2,GLSL_ESParser.FOLLOW_MAT2_in_type_specifier_no_prec1435); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    MAT2150_tree = this.adaptor.create(MAT2150);
                    this.adaptor.addChild(root_0, MAT2150_tree);
                    }


                    break;
                case 15 :
                    // GLSL_ES.g:323:5: MAT3
                    root_0 = this.adaptor.nil();

                    MAT3151=this.match(this.input,MAT3,GLSL_ESParser.FOLLOW_MAT3_in_type_specifier_no_prec1441); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    MAT3151_tree = this.adaptor.create(MAT3151);
                    this.adaptor.addChild(root_0, MAT3151_tree);
                    }


                    break;
                case 16 :
                    // GLSL_ES.g:324:5: MAT4
                    root_0 = this.adaptor.nil();

                    MAT4152=this.match(this.input,MAT4,GLSL_ESParser.FOLLOW_MAT4_in_type_specifier_no_prec1447); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    MAT4152_tree = this.adaptor.create(MAT4152);
                    this.adaptor.addChild(root_0, MAT4152_tree);
                    }


                    break;
                case 17 :
                    // GLSL_ES.g:325:5: SAMPLER2D
                    root_0 = this.adaptor.nil();

                    SAMPLER2D153=this.match(this.input,SAMPLER2D,GLSL_ESParser.FOLLOW_SAMPLER2D_in_type_specifier_no_prec1453); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SAMPLER2D153_tree = this.adaptor.create(SAMPLER2D153);
                    this.adaptor.addChild(root_0, SAMPLER2D153_tree);
                    }


                    break;
                case 18 :
                    // GLSL_ES.g:326:5: SAMPLERCUBE
                    root_0 = this.adaptor.nil();

                    SAMPLERCUBE154=this.match(this.input,SAMPLERCUBE,GLSL_ESParser.FOLLOW_SAMPLERCUBE_in_type_specifier_no_prec1459); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SAMPLERCUBE154_tree = this.adaptor.create(SAMPLERCUBE154);
                    this.adaptor.addChild(root_0, SAMPLERCUBE154_tree);
                    }


                    break;
                case 19 :
                    // GLSL_ES.g:327:5: struct_specifier
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_struct_specifier_in_type_specifier_no_prec1465);
                    struct_specifier155=this.struct_specifier();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_specifier155.getTree());


                    break;
                case 20 :
                    // GLSL_ES.g:329:5: IDENTIFIER
                    root_0 = this.adaptor.nil();

                    IDENTIFIER156=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_type_specifier_no_prec1472); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER156_tree = this.adaptor.create(IDENTIFIER156);
                    this.adaptor.addChild(root_0, IDENTIFIER156_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    precision_qualifier_return: (function() {
        GLSL_ESParser.precision_qualifier_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.precision_qualifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:332:1: precision_qualifier : ( HIGH_PRECISION | MEDIUM_PRECISION | LOW_PRECISION );
    // $ANTLR start "precision_qualifier"
    precision_qualifier: function() {
        var retval = new GLSL_ESParser.precision_qualifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set157 = null;

        var set157_tree=null;

        try {
            // GLSL_ES.g:333:3: ( HIGH_PRECISION | MEDIUM_PRECISION | LOW_PRECISION )
            // GLSL_ES.g:
            root_0 = this.adaptor.nil();

            set157=this.input.LT(1);
            if ( (this.input.LA(1)>=HIGH_PRECISION && this.input.LA(1)<=LOW_PRECISION) ) {
                this.input.consume();
                if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, this.adaptor.create(set157));
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_specifier_return: (function() {
        GLSL_ESParser.struct_specifier_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.struct_specifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:338:1: struct_specifier : STRUCT ( IDENTIFIER )? LEFT_BRACE struct_declaration_list RIGHT_BRACE ;
    // $ANTLR start "struct_specifier"
    struct_specifier: function() {
        var retval = new GLSL_ESParser.struct_specifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var STRUCT158 = null;
        var IDENTIFIER159 = null;
        var LEFT_BRACE160 = null;
        var RIGHT_BRACE162 = null;
         var struct_declaration_list161 = null;

        var STRUCT158_tree=null;
        var IDENTIFIER159_tree=null;
        var LEFT_BRACE160_tree=null;
        var RIGHT_BRACE162_tree=null;

        try {
            // GLSL_ES.g:339:3: ( STRUCT ( IDENTIFIER )? LEFT_BRACE struct_declaration_list RIGHT_BRACE )
            // GLSL_ES.g:339:5: STRUCT ( IDENTIFIER )? LEFT_BRACE struct_declaration_list RIGHT_BRACE
            root_0 = this.adaptor.nil();

            STRUCT158=this.match(this.input,STRUCT,GLSL_ESParser.FOLLOW_STRUCT_in_struct_specifier1510); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            STRUCT158_tree = this.adaptor.create(STRUCT158);
            this.adaptor.addChild(root_0, STRUCT158_tree);
            }
            // GLSL_ES.g:339:12: ( IDENTIFIER )?
            var alt36=2;
            var LA36_0 = this.input.LA(1);

            if ( (LA36_0==IDENTIFIER) ) {
                alt36=1;
            }
            switch (alt36) {
                case 1 :
                    // GLSL_ES.g:339:13: IDENTIFIER
                    IDENTIFIER159=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_struct_specifier1513); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER159_tree = this.adaptor.create(IDENTIFIER159);
                    this.adaptor.addChild(root_0, IDENTIFIER159_tree);
                    }


                    break;

            }

            LEFT_BRACE160=this.match(this.input,LEFT_BRACE,GLSL_ESParser.FOLLOW_LEFT_BRACE_in_struct_specifier1517); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            LEFT_BRACE160_tree = this.adaptor.create(LEFT_BRACE160);
            this.adaptor.addChild(root_0, LEFT_BRACE160_tree);
            }
            this.pushFollow(GLSL_ESParser.FOLLOW_struct_declaration_list_in_struct_specifier1519);
            struct_declaration_list161=this.struct_declaration_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declaration_list161.getTree());
            RIGHT_BRACE162=this.match(this.input,RIGHT_BRACE,GLSL_ESParser.FOLLOW_RIGHT_BRACE_in_struct_specifier1521); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            RIGHT_BRACE162_tree = this.adaptor.create(RIGHT_BRACE162);
            this.adaptor.addChild(root_0, RIGHT_BRACE162_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_declaration_list_return: (function() {
        GLSL_ESParser.struct_declaration_list_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.struct_declaration_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:342:1: struct_declaration_list : ( struct_declaration )+ ;
    // $ANTLR start "struct_declaration_list"
    struct_declaration_list: function() {
        var retval = new GLSL_ESParser.struct_declaration_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var struct_declaration163 = null;


        try {
            // GLSL_ES.g:343:3: ( ( struct_declaration )+ )
            // GLSL_ES.g:343:5: ( struct_declaration )+
            root_0 = this.adaptor.nil();

            // GLSL_ES.g:343:5: ( struct_declaration )+
            var cnt37=0;
            loop37:
            do {
                var alt37=2;
                var LA37_0 = this.input.LA(1);

                if ( (LA37_0==IDENTIFIER||LA37_0==VOID||(LA37_0>=FLOAT && LA37_0<=MAT4)||(LA37_0>=SAMPLER2D && LA37_0<=STRUCT)) ) {
                    alt37=1;
                }


                switch (alt37) {
                case 1 :
                    // GLSL_ES.g:343:6: struct_declaration
                    this.pushFollow(GLSL_ESParser.FOLLOW_struct_declaration_in_struct_declaration_list1535);
                    struct_declaration163=this.struct_declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declaration163.getTree());


                    break;

                default :
                    if ( cnt37 >= 1 ) {
                        break loop37;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(37, this.input);
                        throw eee;
                }
                cnt37++;
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_declaration_return: (function() {
        GLSL_ESParser.struct_declaration_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.struct_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:346:1: struct_declaration : type_specifier struct_declarator_list SEMICOLON ;
    // $ANTLR start "struct_declaration"
    struct_declaration: function() {
        var retval = new GLSL_ESParser.struct_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var SEMICOLON166 = null;
         var type_specifier164 = null;
         var struct_declarator_list165 = null;

        var SEMICOLON166_tree=null;

        try {
            // GLSL_ES.g:347:3: ( type_specifier struct_declarator_list SEMICOLON )
            // GLSL_ES.g:347:5: type_specifier struct_declarator_list SEMICOLON
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_type_specifier_in_struct_declaration1550);
            type_specifier164=this.type_specifier();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, type_specifier164.getTree());
            this.pushFollow(GLSL_ESParser.FOLLOW_struct_declarator_list_in_struct_declaration1552);
            struct_declarator_list165=this.struct_declarator_list();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declarator_list165.getTree());
            SEMICOLON166=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_struct_declaration1554); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            SEMICOLON166_tree = this.adaptor.create(SEMICOLON166);
            this.adaptor.addChild(root_0, SEMICOLON166_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_declarator_list_return: (function() {
        GLSL_ESParser.struct_declarator_list_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.struct_declarator_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:350:1: struct_declarator_list : struct_declarator ( COMMA struct_declarator )* ;
    // $ANTLR start "struct_declarator_list"
    struct_declarator_list: function() {
        var retval = new GLSL_ESParser.struct_declarator_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var COMMA168 = null;
         var struct_declarator167 = null;
         var struct_declarator169 = null;

        var COMMA168_tree=null;

        try {
            // GLSL_ES.g:351:3: ( struct_declarator ( COMMA struct_declarator )* )
            // GLSL_ES.g:351:5: struct_declarator ( COMMA struct_declarator )*
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_struct_declarator_in_struct_declarator_list1567);
            struct_declarator167=this.struct_declarator();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declarator167.getTree());
            // GLSL_ES.g:351:23: ( COMMA struct_declarator )*
            loop38:
            do {
                var alt38=2;
                var LA38_0 = this.input.LA(1);

                if ( (LA38_0==COMMA) ) {
                    alt38=1;
                }


                switch (alt38) {
                case 1 :
                    // GLSL_ES.g:351:24: COMMA struct_declarator
                    COMMA168=this.match(this.input,COMMA,GLSL_ESParser.FOLLOW_COMMA_in_struct_declarator_list1570); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    COMMA168_tree = this.adaptor.create(COMMA168);
                    this.adaptor.addChild(root_0, COMMA168_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_struct_declarator_in_struct_declarator_list1572);
                    struct_declarator169=this.struct_declarator();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, struct_declarator169.getTree());


                    break;

                default :
                    break loop38;
                }
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_declarator_return: (function() {
        GLSL_ESParser.struct_declarator_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.struct_declarator_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:354:1: struct_declarator : IDENTIFIER ( LEFT_BRACKET constant_expression RIGHT_BRACKET )? ;
    // $ANTLR start "struct_declarator"
    struct_declarator: function() {
        var retval = new GLSL_ESParser.struct_declarator_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER170 = null;
        var LEFT_BRACKET171 = null;
        var RIGHT_BRACKET173 = null;
         var constant_expression172 = null;

        var IDENTIFIER170_tree=null;
        var LEFT_BRACKET171_tree=null;
        var RIGHT_BRACKET173_tree=null;

        try {
            // GLSL_ES.g:355:3: ( IDENTIFIER ( LEFT_BRACKET constant_expression RIGHT_BRACKET )? )
            // GLSL_ES.g:355:5: IDENTIFIER ( LEFT_BRACKET constant_expression RIGHT_BRACKET )?
            root_0 = this.adaptor.nil();

            IDENTIFIER170=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_struct_declarator1587); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER170_tree = this.adaptor.create(IDENTIFIER170);
            this.adaptor.addChild(root_0, IDENTIFIER170_tree);
            }
            // GLSL_ES.g:355:16: ( LEFT_BRACKET constant_expression RIGHT_BRACKET )?
            var alt39=2;
            var LA39_0 = this.input.LA(1);

            if ( (LA39_0==LEFT_BRACKET) ) {
                alt39=1;
            }
            switch (alt39) {
                case 1 :
                    // GLSL_ES.g:355:17: LEFT_BRACKET constant_expression RIGHT_BRACKET
                    LEFT_BRACKET171=this.match(this.input,LEFT_BRACKET,GLSL_ESParser.FOLLOW_LEFT_BRACKET_in_struct_declarator1590); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_BRACKET171_tree = this.adaptor.create(LEFT_BRACKET171);
                    this.adaptor.addChild(root_0, LEFT_BRACKET171_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_constant_expression_in_struct_declarator1592);
                    constant_expression172=this.constant_expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, constant_expression172.getTree());
                    RIGHT_BRACKET173=this.match(this.input,RIGHT_BRACKET,GLSL_ESParser.FOLLOW_RIGHT_BRACKET_in_struct_declarator1594); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_BRACKET173_tree = this.adaptor.create(RIGHT_BRACKET173);
                    this.adaptor.addChild(root_0, RIGHT_BRACKET173_tree);
                    }


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    initializer_return: (function() {
        GLSL_ESParser.initializer_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.initializer_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:358:1: initializer : assignment_expression ;
    // $ANTLR start "initializer"
    initializer: function() {
        var retval = new GLSL_ESParser.initializer_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var assignment_expression174 = null;


        try {
            // GLSL_ES.g:359:3: ( assignment_expression )
            // GLSL_ES.g:359:5: assignment_expression
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_assignment_expression_in_initializer1609);
            assignment_expression174=this.assignment_expression();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, assignment_expression174.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    declaration_statement_return: (function() {
        GLSL_ESParser.declaration_statement_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.declaration_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:362:1: declaration_statement : declaration ;
    // $ANTLR start "declaration_statement"
    declaration_statement: function() {
        var retval = new GLSL_ESParser.declaration_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var declaration175 = null;


        try {
            // GLSL_ES.g:363:3: ( declaration )
            // GLSL_ES.g:363:5: declaration
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_declaration_in_declaration_statement1622);
            declaration175=this.declaration();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration175.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    statement_no_new_scope_return: (function() {
        GLSL_ESParser.statement_no_new_scope_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.statement_no_new_scope_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:366:1: statement_no_new_scope : ( compound_statement_with_scope | simple_statement );
    // $ANTLR start "statement_no_new_scope"
    statement_no_new_scope: function() {
        var retval = new GLSL_ESParser.statement_no_new_scope_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var compound_statement_with_scope176 = null;
         var simple_statement177 = null;


        try {
            // GLSL_ES.g:367:3: ( compound_statement_with_scope | simple_statement )
            var alt40=2;
            var LA40_0 = this.input.LA(1);

            if ( (LA40_0==LEFT_BRACE) ) {
                alt40=1;
            }
            else if ( ((LA40_0>=IDENTIFIER && LA40_0<=LEFT_PAREN)||(LA40_0>=INC_OP && LA40_0<=VOID)||(LA40_0>=FLOAT && LA40_0<=BANG)||(LA40_0>=SEMICOLON && LA40_0<=PRECISION)||(LA40_0>=INVARIANT && LA40_0<=STRUCT)||LA40_0==IF||(LA40_0>=WHILE && LA40_0<=DISCARD)) ) {
                alt40=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 40, 0, this.input);

                throw nvae;
            }
            switch (alt40) {
                case 1 :
                    // GLSL_ES.g:367:5: compound_statement_with_scope
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_compound_statement_with_scope_in_statement_no_new_scope1635);
                    compound_statement_with_scope176=this.compound_statement_with_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, compound_statement_with_scope176.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:368:5: simple_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_simple_statement_in_statement_no_new_scope1641);
                    simple_statement177=this.simple_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, simple_statement177.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    simple_statement_return: (function() {
        GLSL_ESParser.simple_statement_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.simple_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:371:1: simple_statement options {backtrack=true; } : ( declaration_statement | expression_statement | selection_statement | iteration_statement | jump_statement );
    // $ANTLR start "simple_statement"
    simple_statement: function() {
        var retval = new GLSL_ESParser.simple_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var declaration_statement178 = null;
         var expression_statement179 = null;
         var selection_statement180 = null;
         var iteration_statement181 = null;
         var jump_statement182 = null;


        try {
            // GLSL_ES.g:373:3: ( declaration_statement | expression_statement | selection_statement | iteration_statement | jump_statement )
            var alt41=5;
            alt41 = this.dfa41.predict(this.input);
            switch (alt41) {
                case 1 :
                    // GLSL_ES.g:373:5: declaration_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_declaration_statement_in_simple_statement1663);
                    declaration_statement178=this.declaration_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration_statement178.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:374:5: expression_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_statement_in_simple_statement1669);
                    expression_statement179=this.expression_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression_statement179.getTree());


                    break;
                case 3 :
                    // GLSL_ES.g:375:5: selection_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_selection_statement_in_simple_statement1675);
                    selection_statement180=this.selection_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, selection_statement180.getTree());


                    break;
                case 4 :
                    // GLSL_ES.g:376:5: iteration_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_iteration_statement_in_simple_statement1681);
                    iteration_statement181=this.iteration_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, iteration_statement181.getTree());


                    break;
                case 5 :
                    // GLSL_ES.g:377:5: jump_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_jump_statement_in_simple_statement1687);
                    jump_statement182=this.jump_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, jump_statement182.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    compound_statement_with_scope_return: (function() {
        GLSL_ESParser.compound_statement_with_scope_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.compound_statement_with_scope_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:380:1: compound_statement_with_scope : LEFT_BRACE ( statement_list )? RIGHT_BRACE ;
    // $ANTLR start "compound_statement_with_scope"
    compound_statement_with_scope: function() {
        var retval = new GLSL_ESParser.compound_statement_with_scope_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LEFT_BRACE183 = null;
        var RIGHT_BRACE185 = null;
         var statement_list184 = null;

        var LEFT_BRACE183_tree=null;
        var RIGHT_BRACE185_tree=null;

        try {
            // GLSL_ES.g:381:3: ( LEFT_BRACE ( statement_list )? RIGHT_BRACE )
            // GLSL_ES.g:381:5: LEFT_BRACE ( statement_list )? RIGHT_BRACE
            root_0 = this.adaptor.nil();

            LEFT_BRACE183=this.match(this.input,LEFT_BRACE,GLSL_ESParser.FOLLOW_LEFT_BRACE_in_compound_statement_with_scope1700); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            LEFT_BRACE183_tree = this.adaptor.create(LEFT_BRACE183);
            this.adaptor.addChild(root_0, LEFT_BRACE183_tree);
            }
            // GLSL_ES.g:381:16: ( statement_list )?
            var alt42=2;
            var LA42_0 = this.input.LA(1);

            if ( ((LA42_0>=IDENTIFIER && LA42_0<=LEFT_PAREN)||(LA42_0>=INC_OP && LA42_0<=VOID)||(LA42_0>=FLOAT && LA42_0<=BANG)||(LA42_0>=SEMICOLON && LA42_0<=PRECISION)||(LA42_0>=INVARIANT && LA42_0<=LEFT_BRACE)||LA42_0==IF||(LA42_0>=WHILE && LA42_0<=DISCARD)) ) {
                alt42=1;
            }
            switch (alt42) {
                case 1 :
                    // GLSL_ES.g:381:17: statement_list
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_list_in_compound_statement_with_scope1703);
                    statement_list184=this.statement_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_list184.getTree());


                    break;

            }

            RIGHT_BRACE185=this.match(this.input,RIGHT_BRACE,GLSL_ESParser.FOLLOW_RIGHT_BRACE_in_compound_statement_with_scope1707); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            RIGHT_BRACE185_tree = this.adaptor.create(RIGHT_BRACE185);
            this.adaptor.addChild(root_0, RIGHT_BRACE185_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    statement_with_scope_return: (function() {
        GLSL_ESParser.statement_with_scope_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.statement_with_scope_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:384:1: statement_with_scope : ( compound_statement_no_new_scope | simple_statement );
    // $ANTLR start "statement_with_scope"
    statement_with_scope: function() {
        var retval = new GLSL_ESParser.statement_with_scope_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var compound_statement_no_new_scope186 = null;
         var simple_statement187 = null;


        try {
            // GLSL_ES.g:385:3: ( compound_statement_no_new_scope | simple_statement )
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0==LEFT_BRACE) ) {
                alt43=1;
            }
            else if ( ((LA43_0>=IDENTIFIER && LA43_0<=LEFT_PAREN)||(LA43_0>=INC_OP && LA43_0<=VOID)||(LA43_0>=FLOAT && LA43_0<=BANG)||(LA43_0>=SEMICOLON && LA43_0<=PRECISION)||(LA43_0>=INVARIANT && LA43_0<=STRUCT)||LA43_0==IF||(LA43_0>=WHILE && LA43_0<=DISCARD)) ) {
                alt43=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 43, 0, this.input);

                throw nvae;
            }
            switch (alt43) {
                case 1 :
                    // GLSL_ES.g:385:5: compound_statement_no_new_scope
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_compound_statement_no_new_scope_in_statement_with_scope1720);
                    compound_statement_no_new_scope186=this.compound_statement_no_new_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, compound_statement_no_new_scope186.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:386:5: simple_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_simple_statement_in_statement_with_scope1726);
                    simple_statement187=this.simple_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, simple_statement187.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    compound_statement_no_new_scope_return: (function() {
        GLSL_ESParser.compound_statement_no_new_scope_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.compound_statement_no_new_scope_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:389:1: compound_statement_no_new_scope : LEFT_BRACE ( statement_list )? RIGHT_BRACE ;
    // $ANTLR start "compound_statement_no_new_scope"
    compound_statement_no_new_scope: function() {
        var retval = new GLSL_ESParser.compound_statement_no_new_scope_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LEFT_BRACE188 = null;
        var RIGHT_BRACE190 = null;
         var statement_list189 = null;

        var LEFT_BRACE188_tree=null;
        var RIGHT_BRACE190_tree=null;

        try {
            // GLSL_ES.g:390:3: ( LEFT_BRACE ( statement_list )? RIGHT_BRACE )
            // GLSL_ES.g:390:5: LEFT_BRACE ( statement_list )? RIGHT_BRACE
            root_0 = this.adaptor.nil();

            LEFT_BRACE188=this.match(this.input,LEFT_BRACE,GLSL_ESParser.FOLLOW_LEFT_BRACE_in_compound_statement_no_new_scope1739); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            LEFT_BRACE188_tree = this.adaptor.create(LEFT_BRACE188);
            this.adaptor.addChild(root_0, LEFT_BRACE188_tree);
            }
            // GLSL_ES.g:390:16: ( statement_list )?
            var alt44=2;
            var LA44_0 = this.input.LA(1);

            if ( ((LA44_0>=IDENTIFIER && LA44_0<=LEFT_PAREN)||(LA44_0>=INC_OP && LA44_0<=VOID)||(LA44_0>=FLOAT && LA44_0<=BANG)||(LA44_0>=SEMICOLON && LA44_0<=PRECISION)||(LA44_0>=INVARIANT && LA44_0<=LEFT_BRACE)||LA44_0==IF||(LA44_0>=WHILE && LA44_0<=DISCARD)) ) {
                alt44=1;
            }
            switch (alt44) {
                case 1 :
                    // GLSL_ES.g:390:17: statement_list
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_list_in_compound_statement_no_new_scope1742);
                    statement_list189=this.statement_list();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_list189.getTree());


                    break;

            }

            RIGHT_BRACE190=this.match(this.input,RIGHT_BRACE,GLSL_ESParser.FOLLOW_RIGHT_BRACE_in_compound_statement_no_new_scope1746); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            RIGHT_BRACE190_tree = this.adaptor.create(RIGHT_BRACE190);
            this.adaptor.addChild(root_0, RIGHT_BRACE190_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    statement_list_return: (function() {
        GLSL_ESParser.statement_list_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.statement_list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:393:1: statement_list : ( statement_no_new_scope )+ ;
    // $ANTLR start "statement_list"
    statement_list: function() {
        var retval = new GLSL_ESParser.statement_list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var statement_no_new_scope191 = null;


        try {
            // GLSL_ES.g:394:3: ( ( statement_no_new_scope )+ )
            // GLSL_ES.g:394:5: ( statement_no_new_scope )+
            root_0 = this.adaptor.nil();

            // GLSL_ES.g:394:5: ( statement_no_new_scope )+
            var cnt45=0;
            loop45:
            do {
                var alt45=2;
                var LA45_0 = this.input.LA(1);

                if ( ((LA45_0>=IDENTIFIER && LA45_0<=LEFT_PAREN)||(LA45_0>=INC_OP && LA45_0<=VOID)||(LA45_0>=FLOAT && LA45_0<=BANG)||(LA45_0>=SEMICOLON && LA45_0<=PRECISION)||(LA45_0>=INVARIANT && LA45_0<=LEFT_BRACE)||LA45_0==IF||(LA45_0>=WHILE && LA45_0<=DISCARD)) ) {
                    alt45=1;
                }


                switch (alt45) {
                case 1 :
                    // GLSL_ES.g:394:6: statement_no_new_scope
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_no_new_scope_in_statement_list1760);
                    statement_no_new_scope191=this.statement_no_new_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_no_new_scope191.getTree());


                    break;

                default :
                    if ( cnt45 >= 1 ) {
                        break loop45;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                        var eee = new org.antlr.runtime.EarlyExitException(45, this.input);
                        throw eee;
                }
                cnt45++;
            } while (true);




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    expression_statement_return: (function() {
        GLSL_ESParser.expression_statement_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.expression_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:397:1: expression_statement : ( expression )? SEMICOLON ;
    // $ANTLR start "expression_statement"
    expression_statement: function() {
        var retval = new GLSL_ESParser.expression_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var SEMICOLON193 = null;
         var expression192 = null;

        var SEMICOLON193_tree=null;

        try {
            // GLSL_ES.g:398:3: ( ( expression )? SEMICOLON )
            // GLSL_ES.g:398:5: ( expression )? SEMICOLON
            root_0 = this.adaptor.nil();

            // GLSL_ES.g:398:5: ( expression )?
            var alt46=2;
            var LA46_0 = this.input.LA(1);

            if ( ((LA46_0>=IDENTIFIER && LA46_0<=LEFT_PAREN)||(LA46_0>=INC_OP && LA46_0<=DEC_OP)||(LA46_0>=FLOAT && LA46_0<=BANG)) ) {
                alt46=1;
            }
            switch (alt46) {
                case 1 :
                    // GLSL_ES.g:398:6: expression
                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_expression_statement1776);
                    expression192=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression192.getTree());


                    break;

            }

            SEMICOLON193=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_expression_statement1780); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            SEMICOLON193_tree = this.adaptor.create(SEMICOLON193);
            this.adaptor.addChild(root_0, SEMICOLON193_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    selection_statement_return: (function() {
        GLSL_ESParser.selection_statement_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.selection_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:401:1: selection_statement options {backtrack=true; } : ( IF LEFT_PAREN expression RIGHT_PAREN statement_with_scope ELSE statement_with_scope | IF LEFT_PAREN expression RIGHT_PAREN statement_with_scope );
    // $ANTLR start "selection_statement"
    selection_statement: function() {
        var retval = new GLSL_ESParser.selection_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IF194 = null;
        var LEFT_PAREN195 = null;
        var RIGHT_PAREN197 = null;
        var ELSE199 = null;
        var IF201 = null;
        var LEFT_PAREN202 = null;
        var RIGHT_PAREN204 = null;
         var expression196 = null;
         var statement_with_scope198 = null;
         var statement_with_scope200 = null;
         var expression203 = null;
         var statement_with_scope205 = null;

        var IF194_tree=null;
        var LEFT_PAREN195_tree=null;
        var RIGHT_PAREN197_tree=null;
        var ELSE199_tree=null;
        var IF201_tree=null;
        var LEFT_PAREN202_tree=null;
        var RIGHT_PAREN204_tree=null;

        try {
            // GLSL_ES.g:403:3: ( IF LEFT_PAREN expression RIGHT_PAREN statement_with_scope ELSE statement_with_scope | IF LEFT_PAREN expression RIGHT_PAREN statement_with_scope )
            var alt47=2;
            var LA47_0 = this.input.LA(1);

            if ( (LA47_0==IF) ) {
                var LA47_1 = this.input.LA(2);

                if ( (this.synpred12_GLSL_ES()) ) {
                    alt47=1;
                }
                else if ( (true) ) {
                    alt47=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 47, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 47, 0, this.input);

                throw nvae;
            }
            switch (alt47) {
                case 1 :
                    // GLSL_ES.g:403:5: IF LEFT_PAREN expression RIGHT_PAREN statement_with_scope ELSE statement_with_scope
                    root_0 = this.adaptor.nil();

                    IF194=this.match(this.input,IF,GLSL_ESParser.FOLLOW_IF_in_selection_statement1802); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IF194_tree = this.adaptor.create(IF194);
                    this.adaptor.addChild(root_0, IF194_tree);
                    }
                    LEFT_PAREN195=this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_selection_statement1804); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_PAREN195_tree = this.adaptor.create(LEFT_PAREN195);
                    this.adaptor.addChild(root_0, LEFT_PAREN195_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_selection_statement1806);
                    expression196=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression196.getTree());
                    RIGHT_PAREN197=this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_selection_statement1808); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_PAREN197_tree = this.adaptor.create(RIGHT_PAREN197);
                    this.adaptor.addChild(root_0, RIGHT_PAREN197_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_with_scope_in_selection_statement1810);
                    statement_with_scope198=this.statement_with_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_with_scope198.getTree());
                    ELSE199=this.match(this.input,ELSE,GLSL_ESParser.FOLLOW_ELSE_in_selection_statement1812); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    ELSE199_tree = this.adaptor.create(ELSE199);
                    this.adaptor.addChild(root_0, ELSE199_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_with_scope_in_selection_statement1814);
                    statement_with_scope200=this.statement_with_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_with_scope200.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:404:5: IF LEFT_PAREN expression RIGHT_PAREN statement_with_scope
                    root_0 = this.adaptor.nil();

                    IF201=this.match(this.input,IF,GLSL_ESParser.FOLLOW_IF_in_selection_statement1820); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IF201_tree = this.adaptor.create(IF201);
                    this.adaptor.addChild(root_0, IF201_tree);
                    }
                    LEFT_PAREN202=this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_selection_statement1822); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_PAREN202_tree = this.adaptor.create(LEFT_PAREN202);
                    this.adaptor.addChild(root_0, LEFT_PAREN202_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_selection_statement1824);
                    expression203=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression203.getTree());
                    RIGHT_PAREN204=this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_selection_statement1826); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_PAREN204_tree = this.adaptor.create(RIGHT_PAREN204);
                    this.adaptor.addChild(root_0, RIGHT_PAREN204_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_with_scope_in_selection_statement1828);
                    statement_with_scope205=this.statement_with_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_with_scope205.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    condition_return: (function() {
        GLSL_ESParser.condition_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.condition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:407:1: condition : ( expression | fully_specified_type IDENTIFIER EQUAL initializer );
    // $ANTLR start "condition"
    condition: function() {
        var retval = new GLSL_ESParser.condition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER208 = null;
        var EQUAL209 = null;
         var expression206 = null;
         var fully_specified_type207 = null;
         var initializer210 = null;

        var IDENTIFIER208_tree=null;
        var EQUAL209_tree=null;

        try {
            // GLSL_ES.g:408:3: ( expression | fully_specified_type IDENTIFIER EQUAL initializer )
            var alt48=2;
            alt48 = this.dfa48.predict(this.input);
            switch (alt48) {
                case 1 :
                    // GLSL_ES.g:408:5: expression
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_condition1841);
                    expression206=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression206.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:409:5: fully_specified_type IDENTIFIER EQUAL initializer
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_fully_specified_type_in_condition1847);
                    fully_specified_type207=this.fully_specified_type();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, fully_specified_type207.getTree());
                    IDENTIFIER208=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_condition1849); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    IDENTIFIER208_tree = this.adaptor.create(IDENTIFIER208);
                    this.adaptor.addChild(root_0, IDENTIFIER208_tree);
                    }
                    EQUAL209=this.match(this.input,EQUAL,GLSL_ESParser.FOLLOW_EQUAL_in_condition1851); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    EQUAL209_tree = this.adaptor.create(EQUAL209);
                    this.adaptor.addChild(root_0, EQUAL209_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_initializer_in_condition1853);
                    initializer210=this.initializer();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, initializer210.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    iteration_statement_return: (function() {
        GLSL_ESParser.iteration_statement_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.iteration_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:412:1: iteration_statement : ( WHILE LEFT_PAREN condition RIGHT_PAREN statement_no_new_scope | DO statement_with_scope WHILE LEFT_PAREN expression RIGHT_PAREN SEMICOLON | FOR LEFT_PAREN for_init_statement for_rest_statement RIGHT_PAREN statement_no_new_scope );
    // $ANTLR start "iteration_statement"
    iteration_statement: function() {
        var retval = new GLSL_ESParser.iteration_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var WHILE211 = null;
        var LEFT_PAREN212 = null;
        var RIGHT_PAREN214 = null;
        var DO216 = null;
        var WHILE218 = null;
        var LEFT_PAREN219 = null;
        var RIGHT_PAREN221 = null;
        var SEMICOLON222 = null;
        var FOR223 = null;
        var LEFT_PAREN224 = null;
        var RIGHT_PAREN227 = null;
         var condition213 = null;
         var statement_no_new_scope215 = null;
         var statement_with_scope217 = null;
         var expression220 = null;
         var for_init_statement225 = null;
         var for_rest_statement226 = null;
         var statement_no_new_scope228 = null;

        var WHILE211_tree=null;
        var LEFT_PAREN212_tree=null;
        var RIGHT_PAREN214_tree=null;
        var DO216_tree=null;
        var WHILE218_tree=null;
        var LEFT_PAREN219_tree=null;
        var RIGHT_PAREN221_tree=null;
        var SEMICOLON222_tree=null;
        var FOR223_tree=null;
        var LEFT_PAREN224_tree=null;
        var RIGHT_PAREN227_tree=null;

        try {
            // GLSL_ES.g:413:3: ( WHILE LEFT_PAREN condition RIGHT_PAREN statement_no_new_scope | DO statement_with_scope WHILE LEFT_PAREN expression RIGHT_PAREN SEMICOLON | FOR LEFT_PAREN for_init_statement for_rest_statement RIGHT_PAREN statement_no_new_scope )
            var alt49=3;
            switch ( this.input.LA(1) ) {
            case WHILE:
                alt49=1;
                break;
            case DO:
                alt49=2;
                break;
            case FOR:
                alt49=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 49, 0, this.input);

                throw nvae;
            }

            switch (alt49) {
                case 1 :
                    // GLSL_ES.g:413:5: WHILE LEFT_PAREN condition RIGHT_PAREN statement_no_new_scope
                    root_0 = this.adaptor.nil();

                    WHILE211=this.match(this.input,WHILE,GLSL_ESParser.FOLLOW_WHILE_in_iteration_statement1866); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    WHILE211_tree = this.adaptor.create(WHILE211);
                    this.adaptor.addChild(root_0, WHILE211_tree);
                    }
                    LEFT_PAREN212=this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_iteration_statement1868); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_PAREN212_tree = this.adaptor.create(LEFT_PAREN212);
                    this.adaptor.addChild(root_0, LEFT_PAREN212_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_condition_in_iteration_statement1870);
                    condition213=this.condition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, condition213.getTree());
                    RIGHT_PAREN214=this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_iteration_statement1872); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_PAREN214_tree = this.adaptor.create(RIGHT_PAREN214);
                    this.adaptor.addChild(root_0, RIGHT_PAREN214_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_no_new_scope_in_iteration_statement1874);
                    statement_no_new_scope215=this.statement_no_new_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_no_new_scope215.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:414:5: DO statement_with_scope WHILE LEFT_PAREN expression RIGHT_PAREN SEMICOLON
                    root_0 = this.adaptor.nil();

                    DO216=this.match(this.input,DO,GLSL_ESParser.FOLLOW_DO_in_iteration_statement1880); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    DO216_tree = this.adaptor.create(DO216);
                    this.adaptor.addChild(root_0, DO216_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_with_scope_in_iteration_statement1882);
                    statement_with_scope217=this.statement_with_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_with_scope217.getTree());
                    WHILE218=this.match(this.input,WHILE,GLSL_ESParser.FOLLOW_WHILE_in_iteration_statement1884); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    WHILE218_tree = this.adaptor.create(WHILE218);
                    this.adaptor.addChild(root_0, WHILE218_tree);
                    }
                    LEFT_PAREN219=this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_iteration_statement1886); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_PAREN219_tree = this.adaptor.create(LEFT_PAREN219);
                    this.adaptor.addChild(root_0, LEFT_PAREN219_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_iteration_statement1888);
                    expression220=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression220.getTree());
                    RIGHT_PAREN221=this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_iteration_statement1890); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_PAREN221_tree = this.adaptor.create(RIGHT_PAREN221);
                    this.adaptor.addChild(root_0, RIGHT_PAREN221_tree);
                    }
                    SEMICOLON222=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_iteration_statement1892); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SEMICOLON222_tree = this.adaptor.create(SEMICOLON222);
                    this.adaptor.addChild(root_0, SEMICOLON222_tree);
                    }


                    break;
                case 3 :
                    // GLSL_ES.g:415:5: FOR LEFT_PAREN for_init_statement for_rest_statement RIGHT_PAREN statement_no_new_scope
                    root_0 = this.adaptor.nil();

                    FOR223=this.match(this.input,FOR,GLSL_ESParser.FOLLOW_FOR_in_iteration_statement1898); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    FOR223_tree = this.adaptor.create(FOR223);
                    this.adaptor.addChild(root_0, FOR223_tree);
                    }
                    LEFT_PAREN224=this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_iteration_statement1900); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    LEFT_PAREN224_tree = this.adaptor.create(LEFT_PAREN224);
                    this.adaptor.addChild(root_0, LEFT_PAREN224_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_for_init_statement_in_iteration_statement1902);
                    for_init_statement225=this.for_init_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, for_init_statement225.getTree());
                    this.pushFollow(GLSL_ESParser.FOLLOW_for_rest_statement_in_iteration_statement1904);
                    for_rest_statement226=this.for_rest_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, for_rest_statement226.getTree());
                    RIGHT_PAREN227=this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_iteration_statement1906); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RIGHT_PAREN227_tree = this.adaptor.create(RIGHT_PAREN227);
                    this.adaptor.addChild(root_0, RIGHT_PAREN227_tree);
                    }
                    this.pushFollow(GLSL_ESParser.FOLLOW_statement_no_new_scope_in_iteration_statement1908);
                    statement_no_new_scope228=this.statement_no_new_scope();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, statement_no_new_scope228.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    for_init_statement_return: (function() {
        GLSL_ESParser.for_init_statement_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.for_init_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:418:1: for_init_statement options {backtrack=true; } : ( expression_statement | declaration_statement );
    // $ANTLR start "for_init_statement"
    for_init_statement: function() {
        var retval = new GLSL_ESParser.for_init_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var expression_statement229 = null;
         var declaration_statement230 = null;


        try {
            // GLSL_ES.g:420:3: ( expression_statement | declaration_statement )
            var alt50=2;
            alt50 = this.dfa50.predict(this.input);
            switch (alt50) {
                case 1 :
                    // GLSL_ES.g:420:5: expression_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_statement_in_for_init_statement1930);
                    expression_statement229=this.expression_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression_statement229.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:421:5: declaration_statement
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_declaration_statement_in_for_init_statement1936);
                    declaration_statement230=this.declaration_statement();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration_statement230.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    for_rest_statement_return: (function() {
        GLSL_ESParser.for_rest_statement_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.for_rest_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:424:1: for_rest_statement : ( condition )? SEMICOLON ( expression )? ;
    // $ANTLR start "for_rest_statement"
    for_rest_statement: function() {
        var retval = new GLSL_ESParser.for_rest_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var SEMICOLON232 = null;
         var condition231 = null;
         var expression233 = null;

        var SEMICOLON232_tree=null;

        try {
            // GLSL_ES.g:425:3: ( ( condition )? SEMICOLON ( expression )? )
            // GLSL_ES.g:425:5: ( condition )? SEMICOLON ( expression )?
            root_0 = this.adaptor.nil();

            // GLSL_ES.g:425:5: ( condition )?
            var alt51=2;
            var LA51_0 = this.input.LA(1);

            if ( ((LA51_0>=IDENTIFIER && LA51_0<=LEFT_PAREN)||(LA51_0>=INC_OP && LA51_0<=VOID)||(LA51_0>=FLOAT && LA51_0<=BANG)||(LA51_0>=INVARIANT && LA51_0<=STRUCT)) ) {
                alt51=1;
            }
            switch (alt51) {
                case 1 :
                    // GLSL_ES.g:425:6: condition
                    this.pushFollow(GLSL_ESParser.FOLLOW_condition_in_for_rest_statement1950);
                    condition231=this.condition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, condition231.getTree());


                    break;

            }

            SEMICOLON232=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_for_rest_statement1954); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            SEMICOLON232_tree = this.adaptor.create(SEMICOLON232);
            this.adaptor.addChild(root_0, SEMICOLON232_tree);
            }
            // GLSL_ES.g:425:28: ( expression )?
            var alt52=2;
            var LA52_0 = this.input.LA(1);

            if ( ((LA52_0>=IDENTIFIER && LA52_0<=LEFT_PAREN)||(LA52_0>=INC_OP && LA52_0<=DEC_OP)||(LA52_0>=FLOAT && LA52_0<=BANG)) ) {
                alt52=1;
            }
            switch (alt52) {
                case 1 :
                    // GLSL_ES.g:425:29: expression
                    this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_for_rest_statement1957);
                    expression233=this.expression();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression233.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    jump_statement_return: (function() {
        GLSL_ESParser.jump_statement_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.jump_statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:428:1: jump_statement : ( CONTINUE SEMICOLON | BREAK SEMICOLON | RETURN ( expression )? SEMICOLON | DISCARD SEMICOLON );
    // $ANTLR start "jump_statement"
    jump_statement: function() {
        var retval = new GLSL_ESParser.jump_statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var CONTINUE234 = null;
        var SEMICOLON235 = null;
        var BREAK236 = null;
        var SEMICOLON237 = null;
        var RETURN238 = null;
        var SEMICOLON240 = null;
        var DISCARD241 = null;
        var SEMICOLON242 = null;
         var expression239 = null;

        var CONTINUE234_tree=null;
        var SEMICOLON235_tree=null;
        var BREAK236_tree=null;
        var SEMICOLON237_tree=null;
        var RETURN238_tree=null;
        var SEMICOLON240_tree=null;
        var DISCARD241_tree=null;
        var SEMICOLON242_tree=null;

        try {
            // GLSL_ES.g:429:3: ( CONTINUE SEMICOLON | BREAK SEMICOLON | RETURN ( expression )? SEMICOLON | DISCARD SEMICOLON )
            var alt54=4;
            switch ( this.input.LA(1) ) {
            case CONTINUE:
                alt54=1;
                break;
            case BREAK:
                alt54=2;
                break;
            case RETURN:
                alt54=3;
                break;
            case DISCARD:
                alt54=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return retval;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 54, 0, this.input);

                throw nvae;
            }

            switch (alt54) {
                case 1 :
                    // GLSL_ES.g:429:5: CONTINUE SEMICOLON
                    root_0 = this.adaptor.nil();

                    CONTINUE234=this.match(this.input,CONTINUE,GLSL_ESParser.FOLLOW_CONTINUE_in_jump_statement1972); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    CONTINUE234_tree = this.adaptor.create(CONTINUE234);
                    this.adaptor.addChild(root_0, CONTINUE234_tree);
                    }
                    SEMICOLON235=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_jump_statement1974); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SEMICOLON235_tree = this.adaptor.create(SEMICOLON235);
                    this.adaptor.addChild(root_0, SEMICOLON235_tree);
                    }


                    break;
                case 2 :
                    // GLSL_ES.g:430:5: BREAK SEMICOLON
                    root_0 = this.adaptor.nil();

                    BREAK236=this.match(this.input,BREAK,GLSL_ESParser.FOLLOW_BREAK_in_jump_statement1980); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    BREAK236_tree = this.adaptor.create(BREAK236);
                    this.adaptor.addChild(root_0, BREAK236_tree);
                    }
                    SEMICOLON237=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_jump_statement1982); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SEMICOLON237_tree = this.adaptor.create(SEMICOLON237);
                    this.adaptor.addChild(root_0, SEMICOLON237_tree);
                    }


                    break;
                case 3 :
                    // GLSL_ES.g:431:5: RETURN ( expression )? SEMICOLON
                    root_0 = this.adaptor.nil();

                    RETURN238=this.match(this.input,RETURN,GLSL_ESParser.FOLLOW_RETURN_in_jump_statement1988); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    RETURN238_tree = this.adaptor.create(RETURN238);
                    this.adaptor.addChild(root_0, RETURN238_tree);
                    }
                    // GLSL_ES.g:431:12: ( expression )?
                    var alt53=2;
                    var LA53_0 = this.input.LA(1);

                    if ( ((LA53_0>=IDENTIFIER && LA53_0<=LEFT_PAREN)||(LA53_0>=INC_OP && LA53_0<=DEC_OP)||(LA53_0>=FLOAT && LA53_0<=BANG)) ) {
                        alt53=1;
                    }
                    switch (alt53) {
                        case 1 :
                            // GLSL_ES.g:431:13: expression
                            this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_jump_statement1991);
                            expression239=this.expression();

                            this.state._fsp--;
                            if (this.state.failed) return retval;
                            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, expression239.getTree());


                            break;

                    }

                    SEMICOLON240=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_jump_statement1995); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SEMICOLON240_tree = this.adaptor.create(SEMICOLON240);
                    this.adaptor.addChild(root_0, SEMICOLON240_tree);
                    }


                    break;
                case 4 :
                    // GLSL_ES.g:432:5: DISCARD SEMICOLON
                    root_0 = this.adaptor.nil();

                    DISCARD241=this.match(this.input,DISCARD,GLSL_ESParser.FOLLOW_DISCARD_in_jump_statement2001); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    DISCARD241_tree = this.adaptor.create(DISCARD241);
                    this.adaptor.addChild(root_0, DISCARD241_tree);
                    }
                    SEMICOLON242=this.match(this.input,SEMICOLON,GLSL_ESParser.FOLLOW_SEMICOLON_in_jump_statement2003); if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) {
                    SEMICOLON242_tree = this.adaptor.create(SEMICOLON242);
                    this.adaptor.addChild(root_0, SEMICOLON242_tree);
                    }


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    external_declaration_return: (function() {
        GLSL_ESParser.external_declaration_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.external_declaration_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:435:1: external_declaration : ( ( function_header )=> function_definition | declaration );
    // $ANTLR start "external_declaration"
    external_declaration: function() {
        var retval = new GLSL_ESParser.external_declaration_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var function_definition243 = null;
         var declaration244 = null;


        try {
            // GLSL_ES.g:436:3: ( ( function_header )=> function_definition | declaration )
            var alt55=2;
            alt55 = this.dfa55.predict(this.input);
            switch (alt55) {
                case 1 :
                    // GLSL_ES.g:436:5: ( function_header )=> function_definition
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_function_definition_in_external_declaration2025);
                    function_definition243=this.function_definition();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_definition243.getTree());


                    break;
                case 2 :
                    // GLSL_ES.g:437:5: declaration
                    root_0 = this.adaptor.nil();

                    this.pushFollow(GLSL_ESParser.FOLLOW_declaration_in_external_declaration2031);
                    declaration244=this.declaration();

                    this.state._fsp--;
                    if (this.state.failed) return retval;
                    if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, declaration244.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_definition_return: (function() {
        GLSL_ESParser.function_definition_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.function_definition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:440:1: function_definition : function_prototype compound_statement_no_new_scope ;
    // $ANTLR start "function_definition"
    function_definition: function() {
        var retval = new GLSL_ESParser.function_definition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var function_prototype245 = null;
         var compound_statement_no_new_scope246 = null;


        try {
            // GLSL_ES.g:441:3: ( function_prototype compound_statement_no_new_scope )
            // GLSL_ES.g:441:5: function_prototype compound_statement_no_new_scope
            root_0 = this.adaptor.nil();

            this.pushFollow(GLSL_ESParser.FOLLOW_function_prototype_in_function_definition2044);
            function_prototype245=this.function_prototype();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, function_prototype245.getTree());
            this.pushFollow(GLSL_ESParser.FOLLOW_compound_statement_no_new_scope_in_function_definition2046);
            compound_statement_no_new_scope246=this.compound_statement_no_new_scope();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) this.adaptor.addChild(root_0, compound_statement_no_new_scope246.getTree());



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    field_selection_return: (function() {
        GLSL_ESParser.field_selection_return = function(){};
        org.antlr.lang.extend(GLSL_ESParser.field_selection_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // GLSL_ES.g:540:1: field_selection : IDENTIFIER ;
    // $ANTLR start "field_selection"
    field_selection: function() {
        var retval = new GLSL_ESParser.field_selection_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER247 = null;

        var IDENTIFIER247_tree=null;

        try {
            // GLSL_ES.g:541:3: ( IDENTIFIER )
            // GLSL_ES.g:541:5: IDENTIFIER
            root_0 = this.adaptor.nil();

            IDENTIFIER247=this.match(this.input,IDENTIFIER,GLSL_ESParser.FOLLOW_IDENTIFIER_in_field_selection3055); if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {
            IDENTIFIER247_tree = this.adaptor.create(IDENTIFIER247);
            this.adaptor.addChild(root_0, IDENTIFIER247_tree);
            }



            retval.stop = this.input.LT(-1);

            if ( this.state.backtracking===0 ) {

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
            }
        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // $ANTLR start "synpred1_GLSL_ES"
    synpred1_GLSL_ES_fragment: function() {
        // GLSL_ES.g:70:5: ( INTCONSTANT )
        // GLSL_ES.g:70:7: INTCONSTANT
        this.match(this.input,INTCONSTANT,GLSL_ESParser.FOLLOW_INTCONSTANT_in_synpred1_GLSL_ES198); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred1_GLSL_ES",

    // $ANTLR start "synpred2_GLSL_ES"
    synpred2_GLSL_ES_fragment: function() {
        // GLSL_ES.g:71:5: ( FLOATCONSTANT )
        // GLSL_ES.g:71:7: FLOATCONSTANT
        this.match(this.input,FLOATCONSTANT,GLSL_ESParser.FOLLOW_FLOATCONSTANT_in_synpred2_GLSL_ES212); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred2_GLSL_ES",

    // $ANTLR start "synpred3_GLSL_ES"
    synpred3_GLSL_ES_fragment: function() {
        // GLSL_ES.g:72:5: ( BOOLCONSTANT )
        // GLSL_ES.g:72:7: BOOLCONSTANT
        this.match(this.input,BOOLCONSTANT,GLSL_ESParser.FOLLOW_BOOLCONSTANT_in_synpred3_GLSL_ES226); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred3_GLSL_ES",

    // $ANTLR start "synpred4_GLSL_ES"
    synpred4_GLSL_ES_fragment: function() {
        // GLSL_ES.g:73:5: ( LEFT_PAREN )
        // GLSL_ES.g:73:7: LEFT_PAREN
        this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_synpred4_GLSL_ES240); if (this.state.failed) return ;


    },
    // $ANTLR end "synpred4_GLSL_ES",

    // $ANTLR start "synpred5_GLSL_ES"
    synpred5_GLSL_ES_fragment: function() {
        // GLSL_ES.g:74:5: ( function_call_header )
        // GLSL_ES.g:74:7: function_call_header
        this.pushFollow(GLSL_ESParser.FOLLOW_function_call_header_in_synpred5_GLSL_ES254);
        this.function_call_header();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred5_GLSL_ES",

    // $ANTLR start "synpred6_GLSL_ES"
    synpred6_GLSL_ES_fragment: function() {
        // GLSL_ES.g:203:5: ( unary_expression assignment_operator )
        // GLSL_ES.g:203:6: unary_expression assignment_operator
        this.pushFollow(GLSL_ESParser.FOLLOW_unary_expression_in_synpred6_GLSL_ES819);
        this.unary_expression();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.pushFollow(GLSL_ESParser.FOLLOW_assignment_operator_in_synpred6_GLSL_ES821);
        this.assignment_operator();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred6_GLSL_ES",

    // $ANTLR start "synpred7_GLSL_ES"
    synpred7_GLSL_ES_fragment: function() {
        // GLSL_ES.g:230:5: ( function_header )
        // GLSL_ES.g:230:6: function_header
        this.pushFollow(GLSL_ESParser.FOLLOW_function_header_in_synpred7_GLSL_ES926);
        this.function_header();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred7_GLSL_ES",

    // $ANTLR start "synpred8_GLSL_ES"
    synpred8_GLSL_ES_fragment: function() {
        // GLSL_ES.g:373:5: ( declaration_statement )
        // GLSL_ES.g:373:5: declaration_statement
        this.pushFollow(GLSL_ESParser.FOLLOW_declaration_statement_in_synpred8_GLSL_ES1663);
        this.declaration_statement();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred8_GLSL_ES",

    // $ANTLR start "synpred9_GLSL_ES"
    synpred9_GLSL_ES_fragment: function() {
        // GLSL_ES.g:374:5: ( expression_statement )
        // GLSL_ES.g:374:5: expression_statement
        this.pushFollow(GLSL_ESParser.FOLLOW_expression_statement_in_synpred9_GLSL_ES1669);
        this.expression_statement();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred9_GLSL_ES",

    // $ANTLR start "synpred12_GLSL_ES"
    synpred12_GLSL_ES_fragment: function() {
        // GLSL_ES.g:403:5: ( IF LEFT_PAREN expression RIGHT_PAREN statement_with_scope ELSE statement_with_scope )
        // GLSL_ES.g:403:5: IF LEFT_PAREN expression RIGHT_PAREN statement_with_scope ELSE statement_with_scope
        this.match(this.input,IF,GLSL_ESParser.FOLLOW_IF_in_synpred12_GLSL_ES1802); if (this.state.failed) return ;
        this.match(this.input,LEFT_PAREN,GLSL_ESParser.FOLLOW_LEFT_PAREN_in_synpred12_GLSL_ES1804); if (this.state.failed) return ;
        this.pushFollow(GLSL_ESParser.FOLLOW_expression_in_synpred12_GLSL_ES1806);
        this.expression();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,RIGHT_PAREN,GLSL_ESParser.FOLLOW_RIGHT_PAREN_in_synpred12_GLSL_ES1808); if (this.state.failed) return ;
        this.pushFollow(GLSL_ESParser.FOLLOW_statement_with_scope_in_synpred12_GLSL_ES1810);
        this.statement_with_scope();

        this.state._fsp--;
        if (this.state.failed) return ;
        this.match(this.input,ELSE,GLSL_ESParser.FOLLOW_ELSE_in_synpred12_GLSL_ES1812); if (this.state.failed) return ;
        this.pushFollow(GLSL_ESParser.FOLLOW_statement_with_scope_in_synpred12_GLSL_ES1814);
        this.statement_with_scope();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred12_GLSL_ES",

    // $ANTLR start "synpred13_GLSL_ES"
    synpred13_GLSL_ES_fragment: function() {
        // GLSL_ES.g:420:5: ( expression_statement )
        // GLSL_ES.g:420:5: expression_statement
        this.pushFollow(GLSL_ESParser.FOLLOW_expression_statement_in_synpred13_GLSL_ES1930);
        this.expression_statement();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred13_GLSL_ES",

    // $ANTLR start "synpred14_GLSL_ES"
    synpred14_GLSL_ES_fragment: function() {
        // GLSL_ES.g:436:5: ( function_header )
        // GLSL_ES.g:436:6: function_header
        this.pushFollow(GLSL_ESParser.FOLLOW_function_header_in_synpred14_GLSL_ES2020);
        this.function_header();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred14_GLSL_ES"

    // Delegated rules



    synpred9_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred9_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred3_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred3_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred2_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred2_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred7_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred7_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred14_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred14_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred8_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred8_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred6_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred6_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred13_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred13_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred5_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred5_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred4_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred4_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred1_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred1_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred12_GLSL_ES: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred12_GLSL_ES_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA4_eotS:
        "\u000c\uffff",
    DFA4_eofS:
        "\u000c\uffff",
    DFA4_minS:
        "\u0001\u0004\u0005\u0000\u0006\uffff",
    DFA4_maxS:
        "\u0001\u001f\u0005\u0000\u0006\uffff",
    DFA4_acceptS:
        "\u0006\uffff\u0001\u0005\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0006",
    DFA4_specialS:
        "\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001\u0004\u0001"+
    "\u0005\u0006\uffff}>",
    DFA4_transitionS: [
            "\u0001\u0004\u0001\u0001\u0001\u0002\u0001\u0003\u0001\u0005"+
            "\u0008\uffff\u000f\u0006",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA4_eot:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA4_eotS),
    DFA4_eof:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA4_eofS),
    DFA4_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA4_minS),
    DFA4_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA4_maxS),
    DFA4_accept:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA4_acceptS),
    DFA4_special:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA4_specialS),
    DFA4_transition: (function() {
        var a = [],
            i,
            numStates = GLSL_ESParser.DFA4_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA4_transitionS[i]));
        }
        return a;
    })()
});

GLSL_ESParser.DFA4 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 4;
    this.eot = GLSL_ESParser.DFA4_eot;
    this.eof = GLSL_ESParser.DFA4_eof;
    this.min = GLSL_ESParser.DFA4_min;
    this.max = GLSL_ESParser.DFA4_max;
    this.accept = GLSL_ESParser.DFA4_accept;
    this.special = GLSL_ESParser.DFA4_special;
    this.transition = GLSL_ESParser.DFA4_transition;
};

org.antlr.lang.extend(GLSL_ESParser.DFA4, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "69:1: primary_expression_or_function_call : ( ( INTCONSTANT )=> primary_expression | ( FLOATCONSTANT )=> primary_expression | ( BOOLCONSTANT )=> primary_expression | ( LEFT_PAREN )=> primary_expression | ( function_call_header )=> function_call | primary_expression );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA4_0 = input.LA(1);

                             
                            var index4_0 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (LA4_0==INTCONSTANT) ) {s = 1;}

                            else if ( (LA4_0==FLOATCONSTANT) ) {s = 2;}

                            else if ( (LA4_0==BOOLCONSTANT) ) {s = 3;}

                            else if ( (LA4_0==IDENTIFIER) ) {s = 4;}

                            else if ( (LA4_0==LEFT_PAREN) ) {s = 5;}

                            else if ( ((LA4_0>=FLOAT && LA4_0<=MAT4)) && (this.synpred5_GLSL_ES())) {s = 6;}

                             
                            input.seek(index4_0);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA4_1 = input.LA(1);

                             
                            var index4_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_GLSL_ES()) ) {s = 7;}

                            else if ( (this.synpred2_GLSL_ES()) ) {s = 8;}

                            else if ( (this.synpred3_GLSL_ES()) ) {s = 9;}

                            else if ( (this.synpred4_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index4_1);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA4_2 = input.LA(1);

                             
                            var index4_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_GLSL_ES()) ) {s = 7;}

                            else if ( (this.synpred2_GLSL_ES()) ) {s = 8;}

                            else if ( (this.synpred3_GLSL_ES()) ) {s = 9;}

                            else if ( (this.synpred4_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index4_2);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA4_3 = input.LA(1);

                             
                            var index4_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_GLSL_ES()) ) {s = 7;}

                            else if ( (this.synpred2_GLSL_ES()) ) {s = 8;}

                            else if ( (this.synpred3_GLSL_ES()) ) {s = 9;}

                            else if ( (this.synpred4_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index4_3);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA4_4 = input.LA(1);

                             
                            var index4_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_GLSL_ES()) ) {s = 7;}

                            else if ( (this.synpred2_GLSL_ES()) ) {s = 8;}

                            else if ( (this.synpred3_GLSL_ES()) ) {s = 9;}

                            else if ( (this.synpred4_GLSL_ES()) ) {s = 10;}

                            else if ( (this.synpred5_GLSL_ES()) ) {s = 6;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index4_4);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA4_5 = input.LA(1);

                             
                            var index4_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred1_GLSL_ES()) ) {s = 7;}

                            else if ( (this.synpred2_GLSL_ES()) ) {s = 8;}

                            else if ( (this.synpred3_GLSL_ES()) ) {s = 9;}

                            else if ( (this.synpred4_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index4_5);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 4, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA17_eotS:
        "\u000c\uffff",
    DFA17_eofS:
        "\u000c\uffff",
    DFA17_minS:
        "\u0001\u0004\u0009\u0000\u0002\uffff",
    DFA17_maxS:
        "\u0001\u0022\u0009\u0000\u0002\uffff",
    DFA17_acceptS:
        "\u000a\uffff\u0001\u0001\u0001\u0002",
    DFA17_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0002\uffff}>",
    DFA17_transitionS: [
            "\u0001\u0007\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0008"+
            "\u0004\uffff\u0001\u0001\u0001\u0002\u0002\uffff\u000f\u0009"+
            "\u0003\u0003",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA17_eot:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA17_eotS),
    DFA17_eof:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA17_eofS),
    DFA17_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA17_minS),
    DFA17_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA17_maxS),
    DFA17_accept:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA17_acceptS),
    DFA17_special:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA17_specialS),
    DFA17_transition: (function() {
        var a = [],
            i,
            numStates = GLSL_ESParser.DFA17_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA17_transitionS[i]));
        }
        return a;
    })()
});

GLSL_ESParser.DFA17 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 17;
    this.eot = GLSL_ESParser.DFA17_eot;
    this.eof = GLSL_ESParser.DFA17_eof;
    this.min = GLSL_ESParser.DFA17_min;
    this.max = GLSL_ESParser.DFA17_max;
    this.accept = GLSL_ESParser.DFA17_accept;
    this.special = GLSL_ESParser.DFA17_special;
    this.transition = GLSL_ESParser.DFA17_transition;
};

org.antlr.lang.extend(GLSL_ESParser.DFA17, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "202:1: assignment_expression : ( ( unary_expression assignment_operator )=> unary_expression assignment_operator assignment_expression | conditional_expression );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA17_1 = input.LA(1);

                             
                            var index17_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA17_2 = input.LA(1);

                             
                            var index17_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA17_3 = input.LA(1);

                             
                            var index17_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA17_4 = input.LA(1);

                             
                            var index17_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA17_5 = input.LA(1);

                             
                            var index17_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA17_6 = input.LA(1);

                             
                            var index17_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA17_7 = input.LA(1);

                             
                            var index17_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA17_8 = input.LA(1);

                             
                            var index17_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_8);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA17_9 = input.LA(1);

                             
                            var index17_9 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred6_GLSL_ES()) ) {s = 10;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index17_9);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 17, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA19_eotS:
        "\u001e\uffff",
    DFA19_eofS:
        "\u001e\uffff",
    DFA19_minS:
        "\u0001\u0004\u001a\u0000\u0003\uffff",
    DFA19_maxS:
        "\u0001\u0044\u001a\u0000\u0003\uffff",
    DFA19_acceptS:
        "\u001b\uffff\u0001\u0003\u0001\u0001\u0001\u0002",
    DFA19_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001"+
    "\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u000f\u0001"+
    "\u0010\u0001\u0011\u0001\u0012\u0001\u0013\u0001\u0014\u0001\u0015\u0001"+
    "\u0016\u0001\u0017\u0001\u0018\u0001\u0019\u0003\uffff}>",
    DFA19_transitionS: [
            "\u0001\u0014\u000a\uffff\u0001\u0001\u0001\uffff\u0001\u0002"+
            "\u0001\u0003\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007"+
            "\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0001\u000c"+
            "\u0001\u000d\u0001\u000e\u0001\u000f\u0001\u0010\u0016\uffff"+
            "\u0001\u001b\u0003\uffff\u0001\u0019\u0001\u0016\u0001\u0017"+
            "\u0001\u0018\u0001\u001a\u0001\u0011\u0001\u0012\u0003\u0015"+
            "\u0001\u0013",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA19_eot:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA19_eotS),
    DFA19_eof:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA19_eofS),
    DFA19_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA19_minS),
    DFA19_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA19_maxS),
    DFA19_accept:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA19_acceptS),
    DFA19_special:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA19_specialS),
    DFA19_transition: (function() {
        var a = [],
            i,
            numStates = GLSL_ESParser.DFA19_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA19_transitionS[i]));
        }
        return a;
    })()
});

GLSL_ESParser.DFA19 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 19;
    this.eot = GLSL_ESParser.DFA19_eot;
    this.eof = GLSL_ESParser.DFA19_eof;
    this.min = GLSL_ESParser.DFA19_min;
    this.max = GLSL_ESParser.DFA19_max;
    this.accept = GLSL_ESParser.DFA19_accept;
    this.special = GLSL_ESParser.DFA19_special;
    this.transition = GLSL_ESParser.DFA19_transition;
};

org.antlr.lang.extend(GLSL_ESParser.DFA19, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "229:1: declaration : ( ( function_header )=> function_prototype SEMICOLON | init_declarator_list SEMICOLON | PRECISION precision_qualifier type_specifier_no_prec SEMICOLON );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA19_1 = input.LA(1);

                             
                            var index19_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA19_2 = input.LA(1);

                             
                            var index19_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA19_3 = input.LA(1);

                             
                            var index19_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA19_4 = input.LA(1);

                             
                            var index19_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA19_5 = input.LA(1);

                             
                            var index19_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA19_6 = input.LA(1);

                             
                            var index19_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA19_7 = input.LA(1);

                             
                            var index19_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA19_8 = input.LA(1);

                             
                            var index19_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_8);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA19_9 = input.LA(1);

                             
                            var index19_9 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_9);
                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA19_10 = input.LA(1);

                             
                            var index19_10 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_10);
                            if ( s>=0 ) return s;
                            break;
                        case 10 : 
                            var LA19_11 = input.LA(1);

                             
                            var index19_11 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_11);
                            if ( s>=0 ) return s;
                            break;
                        case 11 : 
                            var LA19_12 = input.LA(1);

                             
                            var index19_12 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_12);
                            if ( s>=0 ) return s;
                            break;
                        case 12 : 
                            var LA19_13 = input.LA(1);

                             
                            var index19_13 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_13);
                            if ( s>=0 ) return s;
                            break;
                        case 13 : 
                            var LA19_14 = input.LA(1);

                             
                            var index19_14 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_14);
                            if ( s>=0 ) return s;
                            break;
                        case 14 : 
                            var LA19_15 = input.LA(1);

                             
                            var index19_15 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_15);
                            if ( s>=0 ) return s;
                            break;
                        case 15 : 
                            var LA19_16 = input.LA(1);

                             
                            var index19_16 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_16);
                            if ( s>=0 ) return s;
                            break;
                        case 16 : 
                            var LA19_17 = input.LA(1);

                             
                            var index19_17 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_17);
                            if ( s>=0 ) return s;
                            break;
                        case 17 : 
                            var LA19_18 = input.LA(1);

                             
                            var index19_18 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_18);
                            if ( s>=0 ) return s;
                            break;
                        case 18 : 
                            var LA19_19 = input.LA(1);

                             
                            var index19_19 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_19);
                            if ( s>=0 ) return s;
                            break;
                        case 19 : 
                            var LA19_20 = input.LA(1);

                             
                            var index19_20 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_20);
                            if ( s>=0 ) return s;
                            break;
                        case 20 : 
                            var LA19_21 = input.LA(1);

                             
                            var index19_21 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_21);
                            if ( s>=0 ) return s;
                            break;
                        case 21 : 
                            var LA19_22 = input.LA(1);

                             
                            var index19_22 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_22);
                            if ( s>=0 ) return s;
                            break;
                        case 22 : 
                            var LA19_23 = input.LA(1);

                             
                            var index19_23 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_23);
                            if ( s>=0 ) return s;
                            break;
                        case 23 : 
                            var LA19_24 = input.LA(1);

                             
                            var index19_24 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_24);
                            if ( s>=0 ) return s;
                            break;
                        case 24 : 
                            var LA19_25 = input.LA(1);

                             
                            var index19_25 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_25);
                            if ( s>=0 ) return s;
                            break;
                        case 25 : 
                            var LA19_26 = input.LA(1);

                             
                            var index19_26 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred7_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 29;}

                             
                            input.seek(index19_26);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 19, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA41_eotS:
        "\u002c\uffff",
    DFA41_eofS:
        "\u002c\uffff",
    DFA41_minS:
        "\u0001\u0004\u0001\uffff\u000f\u0000\u0003\uffff\u0001\u0000\u0017"+
    "\uffff",
    DFA41_maxS:
        "\u0001\u004f\u0001\uffff\u000f\u0000\u0003\uffff\u0001\u0000\u0017"+
    "\uffff",
    DFA41_acceptS:
        "\u0001\uffff\u0001\u0001\u001a\uffff\u0001\u0002\u0007\uffff\u0001"+
    "\u0003\u0001\u0004\u0002\uffff\u0001\u0005\u0003\uffff",
    DFA41_specialS:
        "\u0002\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001"+
    "\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0003\uffff\u0001"+
    "\u000f\u0017\uffff}>",
    DFA41_transitionS: [
            "\u0001\u0014\u0004\u001c\u0004\uffff\u0002\u001c\u0001\u0001"+
            "\u0001\uffff\u0001\u0002\u0001\u0003\u0001\u0004\u0001\u0005"+
            "\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001\u000a"+
            "\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u000f"+
            "\u0001\u0010\u0003\u001c\u0012\uffff\u0001\u001c\u0001\u0001"+
            "\u0003\uffff\u000b\u0001\u0002\uffff\u0001\u0024\u0001\uffff"+
            "\u0003\u0025\u0004\u0028",
            "",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            "",
            "\u0001\uffff",
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
            ""
    ]
});

org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA41_eot:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA41_eotS),
    DFA41_eof:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA41_eofS),
    DFA41_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA41_minS),
    DFA41_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA41_maxS),
    DFA41_accept:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA41_acceptS),
    DFA41_special:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA41_specialS),
    DFA41_transition: (function() {
        var a = [],
            i,
            numStates = GLSL_ESParser.DFA41_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA41_transitionS[i]));
        }
        return a;
    })()
});

GLSL_ESParser.DFA41 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 41;
    this.eot = GLSL_ESParser.DFA41_eot;
    this.eof = GLSL_ESParser.DFA41_eof;
    this.min = GLSL_ESParser.DFA41_min;
    this.max = GLSL_ESParser.DFA41_max;
    this.accept = GLSL_ESParser.DFA41_accept;
    this.special = GLSL_ESParser.DFA41_special;
    this.transition = GLSL_ESParser.DFA41_transition;
};

org.antlr.lang.extend(GLSL_ESParser.DFA41, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "371:1: simple_statement options {backtrack=true; } : ( declaration_statement | expression_statement | selection_statement | iteration_statement | jump_statement );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA41_2 = input.LA(1);

                             
                            var index41_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_2);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA41_3 = input.LA(1);

                             
                            var index41_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_3);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA41_4 = input.LA(1);

                             
                            var index41_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_4);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA41_5 = input.LA(1);

                             
                            var index41_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_5);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA41_6 = input.LA(1);

                             
                            var index41_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_6);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA41_7 = input.LA(1);

                             
                            var index41_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_7);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA41_8 = input.LA(1);

                             
                            var index41_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_8);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA41_9 = input.LA(1);

                             
                            var index41_9 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_9);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA41_10 = input.LA(1);

                             
                            var index41_10 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_10);
                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA41_11 = input.LA(1);

                             
                            var index41_11 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_11);
                            if ( s>=0 ) return s;
                            break;
                        case 10 : 
                            var LA41_12 = input.LA(1);

                             
                            var index41_12 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_12);
                            if ( s>=0 ) return s;
                            break;
                        case 11 : 
                            var LA41_13 = input.LA(1);

                             
                            var index41_13 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_13);
                            if ( s>=0 ) return s;
                            break;
                        case 12 : 
                            var LA41_14 = input.LA(1);

                             
                            var index41_14 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_14);
                            if ( s>=0 ) return s;
                            break;
                        case 13 : 
                            var LA41_15 = input.LA(1);

                             
                            var index41_15 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_15);
                            if ( s>=0 ) return s;
                            break;
                        case 14 : 
                            var LA41_16 = input.LA(1);

                             
                            var index41_16 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_16);
                            if ( s>=0 ) return s;
                            break;
                        case 15 : 
                            var LA41_20 = input.LA(1);

                             
                            var index41_20 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred8_GLSL_ES()) ) {s = 1;}

                            else if ( (this.synpred9_GLSL_ES()) ) {s = 28;}

                             
                            input.seek(index41_20);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 41, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA48_eotS:
        "\u0013\uffff",
    DFA48_eofS:
        "\u0013\uffff",
    DFA48_minS:
        "\u0001\u0004\u0001\uffff\u0002\u0004\u0001\uffff\u000e\u0004",
    DFA48_maxS:
        "\u0001\u0044\u0001\uffff\u0001\u0035\u0001\u0008\u0001\uffff\u000e"+
    "\u0008",
    DFA48_acceptS:
        "\u0001\uffff\u0001\u0001\u0002\uffff\u0001\u0002\u000e\uffff",
    DFA48_specialS:
        "\u0013\uffff}>",
    DFA48_transitionS: [
            "\u0001\u0002\u0004\u0001\u0004\uffff\u0002\u0001\u0001\u0004"+
            "\u0001\uffff\u0001\u0003\u0001\u0005\u0001\u0006\u0001\u0007"+
            "\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0001\u000c"+
            "\u0001\u000d\u0001\u000e\u0001\u000f\u0001\u0010\u0001\u0011"+
            "\u0001\u0012\u0003\u0001\u0017\uffff\u000b\u0004",
            "",
            "\u0001\u0004\u0003\uffff\u0003\u0001\u0001\uffff\u0003\u0001"+
            "\u0001\uffff\u0001\u0001\u000f\uffff\u0002\u0001\u0001\uffff"+
            "\u000c\u0001\u0001\uffff\u0006\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001",
            "\u0001\u0004\u0003\uffff\u0001\u0001"
    ]
});

org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA48_eot:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA48_eotS),
    DFA48_eof:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA48_eofS),
    DFA48_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA48_minS),
    DFA48_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA48_maxS),
    DFA48_accept:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA48_acceptS),
    DFA48_special:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA48_specialS),
    DFA48_transition: (function() {
        var a = [],
            i,
            numStates = GLSL_ESParser.DFA48_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA48_transitionS[i]));
        }
        return a;
    })()
});

GLSL_ESParser.DFA48 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 48;
    this.eot = GLSL_ESParser.DFA48_eot;
    this.eof = GLSL_ESParser.DFA48_eof;
    this.min = GLSL_ESParser.DFA48_min;
    this.max = GLSL_ESParser.DFA48_max;
    this.accept = GLSL_ESParser.DFA48_accept;
    this.special = GLSL_ESParser.DFA48_special;
    this.transition = GLSL_ESParser.DFA48_transition;
};

org.antlr.lang.extend(GLSL_ESParser.DFA48, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "407:1: condition : ( expression | fully_specified_type IDENTIFIER EQUAL initializer );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA50_eotS:
        "\u0024\uffff",
    DFA50_eofS:
        "\u0024\uffff",
    DFA50_minS:
        "\u0001\u0004\u0006\uffff\u0001\u0000\u0001\uffff\u0001\u0000\u0002"+
    "\uffff\u000e\u0000\u000a\uffff",
    DFA50_maxS:
        "\u0001\u0044\u0006\uffff\u0001\u0000\u0001\uffff\u0001\u0000\u0002"+
    "\uffff\u000e\u0000\u000a\uffff",
    DFA50_acceptS:
        "\u0001\uffff\u0001\u0001\u0009\uffff\u0001\u0002\u0018\uffff",
    DFA50_specialS:
        "\u0007\uffff\u0001\u0000\u0001\uffff\u0001\u0001\u0002\uffff\u0001"+
    "\u0002\u0001\u0003\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001"+
    "\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001"+
    "\u000e\u0001\u000f\u000a\uffff}>",
    DFA50_transitionS: [
            "\u0001\u0007\u0004\u0001\u0004\uffff\u0002\u0001\u0001\u000b"+
            "\u0001\uffff\u0001\u0009\u0001\u000c\u0001\u000d\u0001\u000e"+
            "\u0001\u000f\u0001\u0010\u0001\u0011\u0001\u0012\u0001\u0013"+
            "\u0001\u0014\u0001\u0015\u0001\u0016\u0001\u0017\u0001\u0018"+
            "\u0001\u0019\u0003\u0001\u0012\uffff\u0001\u0001\u0001\u000b"+
            "\u0003\uffff\u000b\u000b",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\uffff",
            "",
            "\u0001\uffff",
            "",
            "",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA50_eot:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA50_eotS),
    DFA50_eof:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA50_eofS),
    DFA50_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA50_minS),
    DFA50_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA50_maxS),
    DFA50_accept:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA50_acceptS),
    DFA50_special:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA50_specialS),
    DFA50_transition: (function() {
        var a = [],
            i,
            numStates = GLSL_ESParser.DFA50_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA50_transitionS[i]));
        }
        return a;
    })()
});

GLSL_ESParser.DFA50 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 50;
    this.eot = GLSL_ESParser.DFA50_eot;
    this.eof = GLSL_ESParser.DFA50_eof;
    this.min = GLSL_ESParser.DFA50_min;
    this.max = GLSL_ESParser.DFA50_max;
    this.accept = GLSL_ESParser.DFA50_accept;
    this.special = GLSL_ESParser.DFA50_special;
    this.transition = GLSL_ESParser.DFA50_transition;
};

org.antlr.lang.extend(GLSL_ESParser.DFA50, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "418:1: for_init_statement options {backtrack=true; } : ( expression_statement | declaration_statement );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA50_7 = input.LA(1);

                             
                            var index50_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_7);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA50_9 = input.LA(1);

                             
                            var index50_9 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_9);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA50_12 = input.LA(1);

                             
                            var index50_12 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_12);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA50_13 = input.LA(1);

                             
                            var index50_13 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_13);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA50_14 = input.LA(1);

                             
                            var index50_14 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_14);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA50_15 = input.LA(1);

                             
                            var index50_15 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_15);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA50_16 = input.LA(1);

                             
                            var index50_16 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_16);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA50_17 = input.LA(1);

                             
                            var index50_17 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_17);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA50_18 = input.LA(1);

                             
                            var index50_18 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_18);
                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA50_19 = input.LA(1);

                             
                            var index50_19 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_19);
                            if ( s>=0 ) return s;
                            break;
                        case 10 : 
                            var LA50_20 = input.LA(1);

                             
                            var index50_20 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_20);
                            if ( s>=0 ) return s;
                            break;
                        case 11 : 
                            var LA50_21 = input.LA(1);

                             
                            var index50_21 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_21);
                            if ( s>=0 ) return s;
                            break;
                        case 12 : 
                            var LA50_22 = input.LA(1);

                             
                            var index50_22 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_22);
                            if ( s>=0 ) return s;
                            break;
                        case 13 : 
                            var LA50_23 = input.LA(1);

                             
                            var index50_23 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_23);
                            if ( s>=0 ) return s;
                            break;
                        case 14 : 
                            var LA50_24 = input.LA(1);

                             
                            var index50_24 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_24);
                            if ( s>=0 ) return s;
                            break;
                        case 15 : 
                            var LA50_25 = input.LA(1);

                             
                            var index50_25 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred13_GLSL_ES()) ) {s = 1;}

                            else if ( (true) ) {s = 11;}

                             
                            input.seek(index50_25);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 50, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA55_eotS:
        "\u001d\uffff",
    DFA55_eofS:
        "\u001d\uffff",
    DFA55_minS:
        "\u0001\u0004\u001a\u0000\u0002\uffff",
    DFA55_maxS:
        "\u0001\u0044\u001a\u0000\u0002\uffff",
    DFA55_acceptS:
        "\u001b\uffff\u0001\u0002\u0001\u0001",
    DFA55_specialS:
        "\u0001\uffff\u0001\u0000\u0001\u0001\u0001\u0002\u0001\u0003\u0001"+
    "\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001"+
    "\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001\u000f\u0001"+
    "\u0010\u0001\u0011\u0001\u0012\u0001\u0013\u0001\u0014\u0001\u0015\u0001"+
    "\u0016\u0001\u0017\u0001\u0018\u0001\u0019\u0002\uffff}>",
    DFA55_transitionS: [
            "\u0001\u0014\u000a\uffff\u0001\u0001\u0001\uffff\u0001\u0002"+
            "\u0001\u0003\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007"+
            "\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0001\u000c"+
            "\u0001\u000d\u0001\u000e\u0001\u000f\u0001\u0010\u0016\uffff"+
            "\u0001\u001b\u0003\uffff\u0001\u0019\u0001\u0016\u0001\u0017"+
            "\u0001\u0018\u0001\u001a\u0001\u0011\u0001\u0012\u0003\u0015"+
            "\u0001\u0013",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "\u0001\uffff",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(GLSL_ESParser, {
    DFA55_eot:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA55_eotS),
    DFA55_eof:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA55_eofS),
    DFA55_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA55_minS),
    DFA55_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(GLSL_ESParser.DFA55_maxS),
    DFA55_accept:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA55_acceptS),
    DFA55_special:
        org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA55_specialS),
    DFA55_transition: (function() {
        var a = [],
            i,
            numStates = GLSL_ESParser.DFA55_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(GLSL_ESParser.DFA55_transitionS[i]));
        }
        return a;
    })()
});

GLSL_ESParser.DFA55 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 55;
    this.eot = GLSL_ESParser.DFA55_eot;
    this.eof = GLSL_ESParser.DFA55_eof;
    this.min = GLSL_ESParser.DFA55_min;
    this.max = GLSL_ESParser.DFA55_max;
    this.accept = GLSL_ESParser.DFA55_accept;
    this.special = GLSL_ESParser.DFA55_special;
    this.transition = GLSL_ESParser.DFA55_transition;
};

org.antlr.lang.extend(GLSL_ESParser.DFA55, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "435:1: external_declaration : ( ( function_header )=> function_definition | declaration );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA55_1 = input.LA(1);

                             
                            var index55_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_1);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA55_2 = input.LA(1);

                             
                            var index55_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_2);
                            if ( s>=0 ) return s;
                            break;
                        case 2 : 
                            var LA55_3 = input.LA(1);

                             
                            var index55_3 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_3);
                            if ( s>=0 ) return s;
                            break;
                        case 3 : 
                            var LA55_4 = input.LA(1);

                             
                            var index55_4 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_4);
                            if ( s>=0 ) return s;
                            break;
                        case 4 : 
                            var LA55_5 = input.LA(1);

                             
                            var index55_5 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_5);
                            if ( s>=0 ) return s;
                            break;
                        case 5 : 
                            var LA55_6 = input.LA(1);

                             
                            var index55_6 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_6);
                            if ( s>=0 ) return s;
                            break;
                        case 6 : 
                            var LA55_7 = input.LA(1);

                             
                            var index55_7 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_7);
                            if ( s>=0 ) return s;
                            break;
                        case 7 : 
                            var LA55_8 = input.LA(1);

                             
                            var index55_8 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_8);
                            if ( s>=0 ) return s;
                            break;
                        case 8 : 
                            var LA55_9 = input.LA(1);

                             
                            var index55_9 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_9);
                            if ( s>=0 ) return s;
                            break;
                        case 9 : 
                            var LA55_10 = input.LA(1);

                             
                            var index55_10 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_10);
                            if ( s>=0 ) return s;
                            break;
                        case 10 : 
                            var LA55_11 = input.LA(1);

                             
                            var index55_11 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_11);
                            if ( s>=0 ) return s;
                            break;
                        case 11 : 
                            var LA55_12 = input.LA(1);

                             
                            var index55_12 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_12);
                            if ( s>=0 ) return s;
                            break;
                        case 12 : 
                            var LA55_13 = input.LA(1);

                             
                            var index55_13 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_13);
                            if ( s>=0 ) return s;
                            break;
                        case 13 : 
                            var LA55_14 = input.LA(1);

                             
                            var index55_14 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_14);
                            if ( s>=0 ) return s;
                            break;
                        case 14 : 
                            var LA55_15 = input.LA(1);

                             
                            var index55_15 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_15);
                            if ( s>=0 ) return s;
                            break;
                        case 15 : 
                            var LA55_16 = input.LA(1);

                             
                            var index55_16 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_16);
                            if ( s>=0 ) return s;
                            break;
                        case 16 : 
                            var LA55_17 = input.LA(1);

                             
                            var index55_17 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_17);
                            if ( s>=0 ) return s;
                            break;
                        case 17 : 
                            var LA55_18 = input.LA(1);

                             
                            var index55_18 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_18);
                            if ( s>=0 ) return s;
                            break;
                        case 18 : 
                            var LA55_19 = input.LA(1);

                             
                            var index55_19 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_19);
                            if ( s>=0 ) return s;
                            break;
                        case 19 : 
                            var LA55_20 = input.LA(1);

                             
                            var index55_20 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_20);
                            if ( s>=0 ) return s;
                            break;
                        case 20 : 
                            var LA55_21 = input.LA(1);

                             
                            var index55_21 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_21);
                            if ( s>=0 ) return s;
                            break;
                        case 21 : 
                            var LA55_22 = input.LA(1);

                             
                            var index55_22 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_22);
                            if ( s>=0 ) return s;
                            break;
                        case 22 : 
                            var LA55_23 = input.LA(1);

                             
                            var index55_23 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_23);
                            if ( s>=0 ) return s;
                            break;
                        case 23 : 
                            var LA55_24 = input.LA(1);

                             
                            var index55_24 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_24);
                            if ( s>=0 ) return s;
                            break;
                        case 24 : 
                            var LA55_25 = input.LA(1);

                             
                            var index55_25 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_25);
                            if ( s>=0 ) return s;
                            break;
                        case 25 : 
                            var LA55_26 = input.LA(1);

                             
                            var index55_26 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred14_GLSL_ES()) ) {s = 28;}

                            else if ( (true) ) {s = 27;}

                             
                            input.seek(index55_26);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 55, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(GLSL_ESParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "IDENTIFIER", "INTCONSTANT", "FLOATCONSTANT", "BOOLCONSTANT", "LEFT_PAREN", "RIGHT_PAREN", "LEFT_BRACKET", "RIGHT_BRACKET", "DOT", "INC_OP", "DEC_OP", "VOID", "COMMA", "FLOAT", "INT", "BOOL", "VEC2", "VEC3", "VEC4", "BVEC2", "BVEC3", "BVEC4", "IVEC2", "IVEC3", "IVEC4", "MAT2", "MAT3", "MAT4", "PLUS", "DASH", "BANG", "STAR", "SLASH", "LEFT_ANGLE", "RIGHT_ANGLE", "LE_OP", "GE_OP", "EQ_OP", "NE_OP", "AND_OP", "XOR_OP", "OR_OP", "QUESTION", "COLON", "EQUAL", "MUL_ASSIGN", "DIV_ASSIGN", "ADD_ASSIGN", "SUB_ASSIGN", "SEMICOLON", "PRECISION", "IN", "OUT", "INOUT", "INVARIANT", "CONST", "ATTRIBUTE", "VARYING", "UNIFORM", "SAMPLER2D", "SAMPLERCUBE", "HIGH_PRECISION", "MEDIUM_PRECISION", "LOW_PRECISION", "STRUCT", "LEFT_BRACE", "RIGHT_BRACE", "IF", "ELSE", "WHILE", "DO", "FOR", "CONTINUE", "BREAK", "RETURN", "DISCARD", "FALSE", "TRUE", "EXPONENT_PART", "DECIMAL_CONSTANT", "OCTAL_CONSTANT", "HEXDIGIT", "HEXADECIMAL_CONSTANT", "MOD_ASSIGN", "TILDE", "PERCENT", "VERTICAL_BAR", "CARET", "AMPERSAND", "WHITESPACE", "COMMENT", "MULTILINE_COMMENT"],
    FOLLOW_external_declaration_in_translation_unit60: new org.antlr.runtime.BitSet([0xFFFE8010, 0xFC400000,0x0000001F, 0x00000000]),
    FOLLOW_EOF_in_translation_unit65: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_variable_identifier78: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INTCONSTANT_in_primary_expression91: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FLOATCONSTANT_in_primary_expression97: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BOOLCONSTANT_in_primary_expression103: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variable_identifier_in_primary_expression109: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_primary_expression115: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_expression_in_primary_expression117: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_primary_expression119: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primary_expression_or_function_call_in_postfix_expression132: new org.antlr.runtime.BitSet([0x00007402, 0x00000000]),
    FOLLOW_LEFT_BRACKET_in_postfix_expression140: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_integer_expression_in_postfix_expression142: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RIGHT_BRACKET_in_postfix_expression144: new org.antlr.runtime.BitSet([0x00007402, 0x00000000]),
    FOLLOW_DOT_in_postfix_expression154: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_field_selection_in_postfix_expression156: new org.antlr.runtime.BitSet([0x00007402, 0x00000000]),
    FOLLOW_INC_OP_in_postfix_expression166: new org.antlr.runtime.BitSet([0x00007402, 0x00000000]),
    FOLLOW_DEC_OP_in_postfix_expression176: new org.antlr.runtime.BitSet([0x00007402, 0x00000000]),
    FOLLOW_primary_expression_in_primary_expression_or_function_call204: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primary_expression_in_primary_expression_or_function_call218: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primary_expression_in_primary_expression_or_function_call232: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primary_expression_in_primary_expression_or_function_call246: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_call_in_primary_expression_or_function_call260: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_primary_expression_in_primary_expression_or_function_call266: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_integer_expression279: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_call_generic_in_function_call292: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_call_header_in_function_call_generic305: new org.antlr.runtime.BitSet([0xFFFEE3F0, 0x00000007]),
    FOLLOW_VOID_in_function_call_generic322: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_assignment_expression_in_function_call_generic334: new org.antlr.runtime.BitSet([0x00010200, 0x00000000]),
    FOLLOW_COMMA_in_function_call_generic337: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_assignment_expression_in_function_call_generic339: new org.antlr.runtime.BitSet([0x00010200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_function_call_generic353: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_identifier_in_function_call_header366: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_function_call_header368: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_constructor_identifier_in_function_identifier383: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_constructor_identifier0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INC_OP_in_unary_expression509: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_DEC_OP_in_unary_expression513: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_unary_operator_in_unary_expression517: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_postfix_expression_in_unary_expression521: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_unary_operator0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unary_expression_in_multiplicative_expression564: new org.antlr.runtime.BitSet([0x00000002, 0x00000018]),
    FOLLOW_set_in_multiplicative_expression567: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_unary_expression_in_multiplicative_expression575: new org.antlr.runtime.BitSet([0x00000002, 0x00000018]),
    FOLLOW_multiplicative_expression_in_additive_expression591: new org.antlr.runtime.BitSet([0x00000002, 0x00000003]),
    FOLLOW_set_in_additive_expression594: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_multiplicative_expression_in_additive_expression602: new org.antlr.runtime.BitSet([0x00000002, 0x00000003]),
    FOLLOW_additive_expression_in_shift_expression617: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_shift_expression_in_relational_expression632: new org.antlr.runtime.BitSet([0x00000002, 0x000001E0]),
    FOLLOW_set_in_relational_expression635: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_shift_expression_in_relational_expression651: new org.antlr.runtime.BitSet([0x00000002, 0x000001E0]),
    FOLLOW_relational_expression_in_equality_expression666: new org.antlr.runtime.BitSet([0x00000002, 0x00000600]),
    FOLLOW_set_in_equality_expression669: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_relational_expression_in_equality_expression677: new org.antlr.runtime.BitSet([0x00000002, 0x00000600]),
    FOLLOW_equality_expression_in_and_expression692: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_and_expression_in_exclusive_or_expression706: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_exclusive_or_expression_in_inclusive_or_expression720: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_inclusive_or_expression_in_logical_and_expression734: new org.antlr.runtime.BitSet([0x00000002, 0x00000800]),
    FOLLOW_AND_OP_in_logical_and_expression737: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_inclusive_or_expression_in_logical_and_expression739: new org.antlr.runtime.BitSet([0x00000002, 0x00000800]),
    FOLLOW_logical_and_expression_in_logical_xor_expression754: new org.antlr.runtime.BitSet([0x00000002, 0x00001000]),
    FOLLOW_XOR_OP_in_logical_xor_expression757: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_logical_and_expression_in_logical_xor_expression759: new org.antlr.runtime.BitSet([0x00000002, 0x00001000]),
    FOLLOW_logical_xor_expression_in_logical_or_expression774: new org.antlr.runtime.BitSet([0x00000002, 0x00002000]),
    FOLLOW_OR_OP_in_logical_or_expression777: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_logical_xor_expression_in_logical_or_expression779: new org.antlr.runtime.BitSet([0x00000002, 0x00002000]),
    FOLLOW_logical_or_expression_in_conditional_expression794: new org.antlr.runtime.BitSet([0x00000002, 0x00004000]),
    FOLLOW_QUESTION_in_conditional_expression797: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_expression_in_conditional_expression799: new org.antlr.runtime.BitSet([0x00000000, 0x00008000]),
    FOLLOW_COLON_in_conditional_expression801: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_assignment_expression_in_conditional_expression803: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unary_expression_in_assignment_expression826: new org.antlr.runtime.BitSet([0x00000000, 0x001F0000]),
    FOLLOW_assignment_operator_in_assignment_expression828: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_assignment_expression_in_assignment_expression830: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_conditional_expression_in_assignment_expression836: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_assignment_operator0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_expression_in_expression892: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_COMMA_in_expression895: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_assignment_expression_in_expression897: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_conditional_expression_in_constant_expression912: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_prototype_in_declaration931: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_declaration933: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_init_declarator_list_in_declaration939: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_declaration941: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PRECISION_in_declaration947: new org.antlr.runtime.BitSet([0xFFFE8010, 0x80000000,0x0000001F, 0x00000000]),
    FOLLOW_precision_qualifier_in_declaration949: new org.antlr.runtime.BitSet([0xFFFE8010, 0x80000000,0x00000011, 0x00000000]),
    FOLLOW_type_specifier_no_prec_in_declaration951: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_declaration953: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_declarator_in_function_prototype966: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_function_prototype968: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_header_in_function_declarator981: new org.antlr.runtime.BitSet([0xFFFE8012, 0xFF800000,0x0000001F, 0x00000000]),
    FOLLOW_parameter_declaration_in_function_declarator984: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_COMMA_in_function_declarator987: new org.antlr.runtime.BitSet([0xFFFE8010, 0xFF800000,0x0000001F, 0x00000000]),
    FOLLOW_parameter_declaration_in_function_declarator989: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_fully_specified_type_in_function_header1007: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_IDENTIFIER_in_function_header1009: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_function_header1011: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_qualifier_in_parameter_declaration1025: new org.antlr.runtime.BitSet([0xFFFE8010, 0x83800000,0x0000001F, 0x00000000]),
    FOLLOW_parameter_qualifier_in_parameter_declaration1030: new org.antlr.runtime.BitSet([0xFFFE8010, 0x80000000,0x0000001F, 0x00000000]),
    FOLLOW_type_specifier_in_parameter_declaration1040: new org.antlr.runtime.BitSet([0x00000412, 0x00000000]),
    FOLLOW_IDENTIFIER_in_parameter_declaration1056: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_LEFT_BRACKET_in_parameter_declaration1074: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_constant_expression_in_parameter_declaration1076: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RIGHT_BRACKET_in_parameter_declaration1078: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_parameter_qualifier0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_single_declaration_in_init_declarator_list1126: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_init_declarator_list_1_in_init_declarator_list1129: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_COMMA_in_init_declarator_list_11144: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_IDENTIFIER_in_init_declarator_list_11146: new org.antlr.runtime.BitSet([0x00000402, 0x00010000]),
    FOLLOW_init_declarator_list_2_in_init_declarator_list_11149: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LEFT_BRACKET_in_init_declarator_list_21164: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_constant_expression_in_init_declarator_list_21166: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RIGHT_BRACKET_in_init_declarator_list_21168: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_EQUAL_in_init_declarator_list_21174: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_initializer_in_init_declarator_list_21176: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_fully_specified_type_in_single_declaration1189: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_IDENTIFIER_in_single_declaration1198: new org.antlr.runtime.BitSet([0x00000402, 0x00010000]),
    FOLLOW_LEFT_BRACKET_in_single_declaration1210: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_constant_expression_in_single_declaration1212: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RIGHT_BRACKET_in_single_declaration1214: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_EQUAL_in_single_declaration1226: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_initializer_in_single_declaration1228: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INVARIANT_in_single_declaration1252: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_IDENTIFIER_in_single_declaration1254: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_specifier_in_fully_specified_type1272: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_qualifier_in_fully_specified_type1278: new org.antlr.runtime.BitSet([0xFFFE8010, 0x80000000,0x0000001F, 0x00000000]),
    FOLLOW_type_specifier_in_fully_specified_type1281: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_CONST_in_type_qualifier1294: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ATTRIBUTE_in_type_qualifier1300: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_VARYING_in_type_qualifier1309: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INVARIANT_in_type_qualifier1315: new org.antlr.runtime.BitSet([0x00000000, 0x20000000]),
    FOLLOW_VARYING_in_type_qualifier1317: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_UNIFORM_in_type_qualifier1323: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_type_specifier_no_prec_in_type_specifier1336: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_precision_qualifier_in_type_specifier1342: new org.antlr.runtime.BitSet([0xFFFE8010, 0x80000000,0x00000011, 0x00000000]),
    FOLLOW_type_specifier_no_prec_in_type_specifier1344: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_VOID_in_type_specifier_no_prec1357: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FLOAT_in_type_specifier_no_prec1363: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INT_in_type_specifier_no_prec1369: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BOOL_in_type_specifier_no_prec1375: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_VEC2_in_type_specifier_no_prec1381: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_VEC3_in_type_specifier_no_prec1387: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_VEC4_in_type_specifier_no_prec1393: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BVEC2_in_type_specifier_no_prec1399: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BVEC3_in_type_specifier_no_prec1405: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BVEC4_in_type_specifier_no_prec1411: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IVEC2_in_type_specifier_no_prec1417: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IVEC3_in_type_specifier_no_prec1423: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IVEC4_in_type_specifier_no_prec1429: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MAT2_in_type_specifier_no_prec1435: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MAT3_in_type_specifier_no_prec1441: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MAT4_in_type_specifier_no_prec1447: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_SAMPLER2D_in_type_specifier_no_prec1453: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_SAMPLERCUBE_in_type_specifier_no_prec1459: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_struct_specifier_in_type_specifier_no_prec1465: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_type_specifier_no_prec1472: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_precision_qualifier0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRUCT_in_struct_specifier1510: new org.antlr.runtime.BitSet([0x00000010, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_IDENTIFIER_in_struct_specifier1513: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_LEFT_BRACE_in_struct_specifier1517: new org.antlr.runtime.BitSet([0xFFFE8010, 0x80000000,0x0000001F, 0x00000000]),
    FOLLOW_struct_declaration_list_in_struct_specifier1519: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_RIGHT_BRACE_in_struct_specifier1521: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_struct_declaration_in_struct_declaration_list1535: new org.antlr.runtime.BitSet([0xFFFE8012, 0x80000000,0x0000001F, 0x00000000]),
    FOLLOW_type_specifier_in_struct_declaration1550: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_struct_declarator_list_in_struct_declaration1552: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_struct_declaration1554: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_struct_declarator_in_struct_declarator_list1567: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_COMMA_in_struct_declarator_list1570: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_struct_declarator_in_struct_declarator_list1572: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_struct_declarator1587: new org.antlr.runtime.BitSet([0x00000402, 0x00000000]),
    FOLLOW_LEFT_BRACKET_in_struct_declarator1590: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_constant_expression_in_struct_declarator1592: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RIGHT_BRACKET_in_struct_declarator1594: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_assignment_expression_in_initializer1609: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_in_declaration_statement1622: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compound_statement_with_scope_in_statement_no_new_scope1635: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_simple_statement_in_statement_no_new_scope1641: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_statement_in_simple_statement1663: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_statement_in_simple_statement1669: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_selection_statement_in_simple_statement1675: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_iteration_statement_in_simple_statement1681: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_jump_statement_in_simple_statement1687: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LEFT_BRACE_in_compound_statement_with_scope1700: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEFF, 0x00000000]),
    FOLLOW_statement_list_in_compound_statement_with_scope1703: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_RIGHT_BRACE_in_compound_statement_with_scope1707: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compound_statement_no_new_scope_in_statement_with_scope1720: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_simple_statement_in_statement_with_scope1726: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LEFT_BRACE_in_compound_statement_no_new_scope1739: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEFF, 0x00000000]),
    FOLLOW_statement_list_in_compound_statement_no_new_scope1742: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000040, 0x00000000]),
    FOLLOW_RIGHT_BRACE_in_compound_statement_no_new_scope1746: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_statement_no_new_scope_in_statement_list1760: new org.antlr.runtime.BitSet([0xFFFEE1F2, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_expression_in_expression_statement1776: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_expression_statement1780: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IF_in_selection_statement1802: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_selection_statement1804: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_expression_in_selection_statement1806: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_selection_statement1808: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_statement_with_scope_in_selection_statement1810: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000100, 0x00000000]),
    FOLLOW_ELSE_in_selection_statement1812: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_statement_with_scope_in_selection_statement1814: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IF_in_selection_statement1820: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_selection_statement1822: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_expression_in_selection_statement1824: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_selection_statement1826: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_statement_with_scope_in_selection_statement1828: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_in_condition1841: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_fully_specified_type_in_condition1847: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_IDENTIFIER_in_condition1849: new org.antlr.runtime.BitSet([0x00000000, 0x00010000]),
    FOLLOW_EQUAL_in_condition1851: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_initializer_in_condition1853: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_WHILE_in_iteration_statement1866: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_iteration_statement1868: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC000007,0x0000001F, 0x00000000]),
    FOLLOW_condition_in_iteration_statement1870: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_iteration_statement1872: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_statement_no_new_scope_in_iteration_statement1874: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DO_in_iteration_statement1880: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_statement_with_scope_in_iteration_statement1882: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000200, 0x00000000]),
    FOLLOW_WHILE_in_iteration_statement1884: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_iteration_statement1886: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_expression_in_iteration_statement1888: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_iteration_statement1890: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_iteration_statement1892: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FOR_in_iteration_statement1898: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_iteration_statement1900: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000001F, 0x00000000]),
    FOLLOW_for_init_statement_in_iteration_statement1902: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC200007,0x0000001F, 0x00000000]),
    FOLLOW_for_rest_statement_in_iteration_statement1904: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_iteration_statement1906: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_statement_no_new_scope_in_iteration_statement1908: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_statement_in_for_init_statement1930: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_statement_in_for_init_statement1936: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_condition_in_for_rest_statement1950: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_for_rest_statement1954: new org.antlr.runtime.BitSet([0xFFFE61F2, 0x00000007]),
    FOLLOW_expression_in_for_rest_statement1957: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_CONTINUE_in_jump_statement1972: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_jump_statement1974: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BREAK_in_jump_statement1980: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_jump_statement1982: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_RETURN_in_jump_statement1988: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00200007]),
    FOLLOW_expression_in_jump_statement1991: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_jump_statement1995: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DISCARD_in_jump_statement2001: new org.antlr.runtime.BitSet([0x00000000, 0x00200000]),
    FOLLOW_SEMICOLON_in_jump_statement2003: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_definition_in_external_declaration2025: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_in_external_declaration2031: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_prototype_in_function_definition2044: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000020, 0x00000000]),
    FOLLOW_compound_statement_no_new_scope_in_function_definition2046: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_field_selection3055: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INTCONSTANT_in_synpred1_GLSL_ES198: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FLOATCONSTANT_in_synpred2_GLSL_ES212: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BOOLCONSTANT_in_synpred3_GLSL_ES226: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_synpred4_GLSL_ES240: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_call_header_in_synpred5_GLSL_ES254: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unary_expression_in_synpred6_GLSL_ES819: new org.antlr.runtime.BitSet([0x00000000, 0x001F0000]),
    FOLLOW_assignment_operator_in_synpred6_GLSL_ES821: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_header_in_synpred7_GLSL_ES926: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_declaration_statement_in_synpred8_GLSL_ES1663: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_statement_in_synpred9_GLSL_ES1669: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IF_in_synpred12_GLSL_ES1802: new org.antlr.runtime.BitSet([0x00000100, 0x00000000]),
    FOLLOW_LEFT_PAREN_in_synpred12_GLSL_ES1804: new org.antlr.runtime.BitSet([0xFFFE61F0, 0x00000007]),
    FOLLOW_expression_in_synpred12_GLSL_ES1806: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RIGHT_PAREN_in_synpred12_GLSL_ES1808: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_statement_with_scope_in_synpred12_GLSL_ES1810: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000100, 0x00000000]),
    FOLLOW_ELSE_in_synpred12_GLSL_ES1812: new org.antlr.runtime.BitSet([0xFFFEE1F0, 0xFC600007,0x0000FEBF, 0x00000000]),
    FOLLOW_statement_with_scope_in_synpred12_GLSL_ES1814: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_statement_in_synpred13_GLSL_ES1930: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_header_in_synpred14_GLSL_ES2020: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();